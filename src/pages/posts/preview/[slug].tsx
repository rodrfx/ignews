import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import router from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { getPrismicClient } from "../../../services/prismic";
import { RichText } from "prismic-dom";

import s from "../post.module.scss";

interface PostPreviewProps {
	post: {
		slug: string;
		title: string;
		content: string;
		updatedAt: string;
	};
}

export default function PostPreview({ post }: PostPreviewProps) {
	const [session] = useSession();

	useEffect(() => {
		if (session?.activeSubscription) {
			router.push(`posts/${post.slug}`);
		}
	}, [session]);

	return (
		<>
			<Head>
				<title>{post.title} | Ignews</title>
			</Head>

			<main className={s.container}>
				<article className={s.post}>
					<h1>{post.title}</h1>
					<time>{post.updatedAt}</time>
					<div
						className={`${s.postContent} ${s.previewContent}`}
						dangerouslySetInnerHTML={{ __html: post.content }}
					></div>
					<div className={s.continueReading}>
						Wanna continue reading?
						<Link href="/">
							<a href="">Subscribe now 🤗</a>
						</Link>
					</div>
				</article>
			</main>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params;

	const prismic = getPrismicClient();

	const response = await prismic.getByUID("publication", String(slug), {});

	const post = {
		slug,
		title: RichText.asText(response.data.title),
		content: RichText.asHtml(response.data.content.splice(0, 1)),
		updatedAt: new Date(response.last_publication_date).toLocaleDateString(
			"pt-BR",
			{
				day: "2-digit",
				month: "long",
				year: "numeric",
			}
		),
	};

	return {
		props: {
			post,
		},
		redirect: 60 * 30, //30min
	};
};
