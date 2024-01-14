import {
	Card,
	Icon,
	CardBody,
	Text,
	VStack,
	HStack,
	Box,
	Heading,
} from "@chakra-ui/react"
import React from "react"
import styled from "@emotion/styled"
import { Post } from "../types"
import Link from "next/link"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const PostCard: React.FC<{ readonly post: Post }> = ({ post }) => {
	const bodyPreview = post.body.includes("---")
		? post.body.split("---")[0]
		: null

	return (
		<StyledLink
			href={post.type === "blog" ? `/posts/${post.id}` : post.body}
			passHref
		>
			<Card backgroundColor="#0A0A0B" borderColor="white" borderWidth="1px">
				<CardBody>
					<VStack alignItems="start" direction="column" spacing={10}>
						<VStack alignItems="start" gap={1} justifyContent="space-between">
							<HStack alignItems="center">
								<Heading as="p" color="white" fontSize="24px" size="md">
									{post.title}
								</Heading>
								{post.type === "external" ? (
									<Icon color="white" fontSize="20px">
										<ExternalLinkIcon />
									</Icon>
								) : null}
							</HStack>
							<HStack mt="2px">
								<Text as="p" color="gray.200" fontSize="14px">
									{post.publishedAt}
								</Text>
							</HStack>
						</VStack>
						{bodyPreview ? (
							<HStack>
								<Text color="gray.50">{bodyPreview}</Text>
							</HStack>
						) : null}
					</VStack>
				</CardBody>
			</Card>
		</StyledLink>
	)
}

export const Posts: React.FC<{ readonly posts: Post[] }> = ({ posts }) => {
	return (
		<VStack alignItems="start" direction="column" spacing={6} w="100%">
			{posts.map((post) => (
				<Box key={post.id} w="100%">
					<PostCard post={post} />
				</Box>
			))}
		</VStack>
	)
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
