const allPosts = [
	{
		id: '01975925-8129-7655-b3a5-b9662afb5eec',
		title: 'Soft Assertions',
	},
	{
		id: '01975925-9f95-7414-bc6f-f5c7c2923012',
		title: 'Implicit Assertions',
	},
]

export async function fetchPosts(postIds?: Array<string>): Promise<Response> {
	const matchingPosts =
		postIds && postIds.length > 0
			? allPosts.filter((post) => {
					return postIds.includes(post.id)
				})
			: allPosts

	if (matchingPosts.length === 0) {
		return Response.json(
			{
				message: `Failed to find posts with IDs: ${postIds?.join(', ')}`,
			},
			{
				status: 404,
			},
		)
	}

	return Response.json(matchingPosts, {
		headers: {
			'cache-control': 'public, max-age=31536000, immutable',
		},
	})
}
