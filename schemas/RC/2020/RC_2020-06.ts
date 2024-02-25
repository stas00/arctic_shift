interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits?: null|number, // 147540/249774 (59.07%)
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG"|"JPG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings?: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "PNG"|"APNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		}, // 147540/249774 (59.07%)
	}[],
	associated_award: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY"|"PREMIUM"|"APPRECIATION"|"MODERATOR"|"GROUP",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits?: null|number, // 18500/32257 (57.35%)
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|"t5_2dptrd"|"t5_32g3v"|"t5_2htmve"|"t5_2dpsxy"|"t5_2dptgf"|"t5_2set6"|"t5_2r7gr"|"t5_2dptqa"|"t5_2dpthm"|"t5_2ry83"|"t5_2qhh7"|"t5_2q0682"|"t5_2dpu97"|"t5_2fqotw"|"t5_2tmxc",
		tiers_by_required_awardings?: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "PNG"|"APNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		}, // 18500/32257 (57.35%)
	},
	author: string,
	author_cakeday?: boolean, // 592003/187914434 (0.32%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 12867443/34905936 (36.86%)
		e: "text"|"emoji",
		t?: string, // 22038493/34905936 (63.14%)
		u?: string, // 12867443/34905936 (36.86%)
	}[], // 167658460/187914434 (89.22%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 167658460/187914434 (89.22%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 167658460/187914434 (89.22%)
	author_premium?: boolean, // 167658460/187914434 (89.22%)
	awarders: [],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	comment_type?: null, // 116305086/187914434 (61.89%)
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	editable?: boolean, // 224/187914434 (0.00%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 44179/187914434 (0.02%)
		gid_2?: number, // 43350/187914434 (0.02%)
		gid_3?: number, // 3499/187914434 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 2060/8457 (24.36%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2060/8457 (24.36%)
			s: {
				gif: string,
				mp4?: string, // 2060/8457 (24.36%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"giphy"|"sticker",
		},
	}, // 7470/187914434 (0.00%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
}