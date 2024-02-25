interface RedditPost {
	_meta?: {
		is_edited?: boolean,
		note?: "no_2nd_retrieval"|"initially_unavailable",
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		retrieved_2nd_on?: number,
		was_deleted_later?: boolean,
		was_initially_deleted?: boolean,
	},
	ad_business?: null,
	ad_promoted_user_posts?: null|{
		ad_promoted_user_posts?: null,
		ad_supplementary_text_md?: null,
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"MODERATOR"|"APPRECIATION"|"COMMUNITY",
			award_type: "global"|"moderator"|"community",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null|number,
			days_of_premium: null|number,
			description: string,
			end_date: null,
			giver_coin_reward: null,
			icon_format: "PNG"|"APNG"|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: string,
			penny_donate: null,
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
			start_date: null,
			static_icon_height: number,
			static_icon_url: string,
			static_icon_width: number,
			sticky_duration_seconds: null,
			subreddit_coin_reward: number,
			subreddit_id: null|"t5_2qtjz"|"t5_2qhta",
			tiers_by_required_awardings: null,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean,
		author_flair_background_color: null|""|"transparent"|"#ffb000"|"#373c3f"|"#23adf9"|"#df73ff"|"#94e044"|"#0266b3"|"#ff8717"|"#c76c35"|"#dadada",
		author_flair_css_class: null|"zBowser"|"ModJamieYoung"|"SHIELD1"|"TheLeague1"|"OrphanBlack1",
		author_flair_richtext?: {
			a?: ":Bowser:"|":invincible3:"|":Chiefs:"|":Broncos:"|":robot2:"|":burgermarttrash:"|":dudeisawit:"|":snoo_dealwithit:",
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext",
		author_fullname?: string,
		author_is_blocked: boolean,
		author_patreon_flair?: boolean,
		author_premium?: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null,
		clicked: boolean,
		collections?: {
			author_id: "t2_1ebjv3pj",
			author_name: "h0neybe8r",
			collection_id: "f5f1d3a0-a6cb-4173-be6c-8e92a17d5edd",
			created_at_utc: number,
			description: string,
			display_layout: "GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_2rnvp",
			title: "Product Updates &amp; Announcements",
		}[],
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string,
				id: number,
				media_id: string,
			}[],
		},
		gilded: number,
		gildings: {
			gid_1?: number,
			gid_2?: number,
			gid_3?: number,
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: ":Discussion:"|":Question:"|":Dive:"|":Camera:"|":619dda9a618eb:",
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		link_flair_template_id?: string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name: "Paramount Pictures"|"Lionsgate Movies"|"The Tonight Show Starring Jimmy Fallon"|"Illumination"|"STARZ",
				author_url: string,
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video",
				version: "1.0",
				width: number,
			},
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
			type?: "youtube.com",
		},
		media_embed: {
			content?: string,
			height?: number,
			scrolling?: boolean,
			width?: number,
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: string,
				m: "image/jpg"|"image/png",
				o?: {
					u: string,
					x: number,
					y: number,
				}[],
				p: {
					u: string,
					x: number,
					y: number,
				}[],
				s: {
					u: string,
					x: number,
					y: number,
				},
				status: "valid",
			},
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"no_ads"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"self"|"rich:video"|"hosted:video",
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
				},
			}[],
		},
		promo_layout?: null,
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name: "Paramount Pictures"|"Lionsgate Movies"|"The Tonight Show Starring Jimmy Fallon"|"Illumination"|"STARZ",
				author_url: string,
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video",
				version: "1.0",
				width: number,
			},
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
			type?: "youtube.com",
		},
		secure_media_embed: {
			content?: string,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation?: boolean,
			allowed_media_in_comments: ("animated"|"giphy"|"static"|"expression")[],
			banner_img: string,
			banner_size: null|number[],
			community_icon: string|null,
			created?: number,
			created_utc?: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: string,
			display_name_prefixed: string,
			free_form_reports: boolean,
			header_img: string|null,
			header_size: null|number[],
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled?: boolean,
			is_default_banner?: boolean,
			is_default_icon?: boolean,
			key_color: ""|"#ea0027"|"#0079d3"|"#24a0ed"|"#222222"|"#ff4500"|"#ff8717"|"#a5a4a4"|"#545452"|"#ddbd37",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right"|""|null,
			name: string,
			over_18: boolean,
			previous_names: ("japanesetattoo"|"a:t5_3aiie")[],
			primary_color: string,
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link"|"Submit a Link Post"|"Submit a link"|"Share a URL"|"SUBMIT LINK",
			submit_text_label: ""|"Submit text"|"Submit a Text Post"|"Submit a new post"|"Submit content"|"Start a Text Discussion"|"SUBMIT TEXT",
			subreddit_type: "public"|"user"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_is_banned: boolean|null,
			user_is_contributor: boolean|null,
			user_is_moderator: boolean|null,
			user_is_muted: null,
			user_is_subscriber: boolean|null,
		},
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted",
		suggested_sort: null|"new"|"qa"|"confidence"|"top",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|null,
		wls: number|null,
	}[],
	ad_supplementary_text_md?: null|string,
	ad_user_targeting?: null,
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	all_awardings?: {
		award_sub_type?: "GLOBAL"|"APPRECIATION"|"PREMIUM"|"COMMUNITY"|"MODERATOR"|"GROUP"|"CHAT_REACTION",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits?: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number|null,
		days_of_premium: number|null,
		description: string|null,
		end_date?: null|number,
		giver_coin_reward?: null|number,
		icon_format?: null|"PNG"|"APNG"|"JPG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new?: boolean,
		name: string,
		penny_donate?: null|number,
		penny_price?: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons?: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date?: null|number,
		static_icon_height?: number,
		static_icon_url?: string,
		static_icon_width?: number,
		sticky_duration_seconds?: null,
		subreddit_coin_reward?: number,
		subreddit_id: null|string,
		tiers_by_required_awardings?: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "APNG"|"PNG",
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
		},
	}[],
	allow_live_comments?: boolean,
	app_store_data?: null,
	approved?: boolean,
	approved_at_utc?: null,
	approved_by?: null,
	archived?: boolean,
	author?: string,
	author_cakeday?: boolean,
	author_created_utc?: number|null,
	author_flair_background_color?: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id?: null|string,
	author_flair_text: null|string,
	author_flair_text_color?: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname?: string|null,
	author_id?: string|null,
	author_is_blocked?: boolean,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders?: [],
	ban_note?: null,
	banned_at_utc?: null,
	banned_by?: null|"aphexcoil"|"NorthboundFox",
	brand_safe?: boolean,
	call_to_action?: string|null,
	campaign_id?: null,
	can_gild?: boolean,
	can_mod_post?: boolean,
	category?: null|string,
	clicked?: boolean,
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description?: string|null,
		display_layout?: null|"GALLERY"|"TIMELINE",
		last_update_utc: number,
		link_ids: string[],
		permalink?: string,
		sr_detail?: {
			banner_img: string|null,
			banner_size: null|number[],
			community_icon: string,
			created?: number,
			created_utc?: number,
			display_name?: string,
			display_name_prefixed?: string,
			icon_img: string,
			icon_size: null|number[],
			key_color: string,
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: string,
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: "all_ads"|"some_ads"|"no_ads"|null,
		},
		subreddit_id: string,
		title: string,
	}[],
	content_categories?: null|("gaming"|"photography"|"entertainment"|"drawing_and_painting"|"videos"|"music"|"diy_and_crafts"|"comics"|"writing")[],
	contest_mode?: boolean,
	created?: number,
	created_utc: number|string,
	crosspost_parent?: string,
	crosspost_parent_list?: {
		all_awardings?: {
			award_sub_type?: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM"|"GROUP"|"CHAT_REACTION",
			award_type: "global"|"community"|"moderator",
			awardings_required_to_grant_benefits?: null|number,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number|null,
			days_of_premium: number|null,
			description: string|null,
			end_date?: null|number,
			giver_coin_reward?: null|number,
			icon_format?: null|"JPG"|"PNG"|"APNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new?: boolean,
			name: string,
			penny_donate?: null|number,
			penny_price?: null|number,
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			resized_static_icons?: {
				height: number,
				url: string,
				width: number,
			}[],
			start_date?: null|number,
			static_icon_height?: number,
			static_icon_url?: string,
			static_icon_width?: number,
			sticky_duration_seconds?: null,
			subreddit_coin_reward?: number,
			subreddit_id: null|string,
			tiers_by_required_awardings?: null|{
				[key: string]: {
					awardings_required: number,
					icon: {
						format: "APNG"|"PNG",
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
			},
		}[],
		allow_live_comments?: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean,
		author_flair_background_color?: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		author_flair_template_id?: null|string,
		author_flair_text: null|string,
		author_flair_text_color?: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext",
		author_fullname?: string,
		author_is_blocked?: boolean,
		author_patreon_flair?: boolean,
		author_premium?: boolean,
		awarders?: [],
		banned_at_utc: null,
		banned_by: null,
		brand_safe?: boolean,
		call_to_action?: ""|"Shop Now"|"Learn More"|"Sign Up"|"Download"|"Install"|"Play Now"|"View More"|"Watch Now"|"Apply Now"|"Get Showtimes"|"Contact Us"|"See Menu"|"Get a Quote",
		can_gild: boolean|null,
		can_mod_post: boolean,
		category?: null|string,
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description?: string|null,
			display_layout?: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			sr_detail?: {
				banner_img: string,
				banner_size: null|number[],
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: string,
				display_name_prefixed: string,
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#46d160"|"#545452"|"#222222"|"#7e53c1"|"#ea0027"|"#ddbd37"|"#0079d3"|"#ff8717",
				mod_permissions: [],
				name: string,
				over_18: boolean,
				primary_color: string,
				sr: string,
				sr_display_name_prefixed: string,
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: string,
				url: string,
				user_can_crosspost: boolean|null,
				whitelist_status: "all_ads"|"some_ads"|"no_ads"|null,
			},
			subreddit_id: string,
			title: string,
		}[],
		content_categories?: null|("diy_and_crafts"|"photography"|"gaming"|"drawing_and_painting"|"comics"|"entertainment"|"music"|"videos"|"writing")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type?: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string|null,
		downs: number,
		edited: boolean|number,
		event_end?: number,
		event_is_live?: boolean,
		event_start?: number,
		gallery_data?: {
			items: {
				caption?: string,
				display_url?: "bestbuy.com",
				id: number,
				media_id: string,
				outbound_url?: string,
			}[],
		}|null,
		gilded: number,
		gildings?: {
			gid_1?: number,
			gid_2?: number,
			gid_3?: number,
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui?: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
		is_meta?: boolean,
		is_original_content?: boolean,
		is_reddit_media_domain?: boolean,
		is_robot_indexable?: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null|boolean,
		link_flair_background_color?: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext?: {
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		link_flair_template_id?: string|null,
		link_flair_text: null|string,
		link_flair_text_color?: "dark"|"light"|null,
		link_flair_type?: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "",
			recording_duration_seconds?: number,
			recording_fallback_url?: string,
			recording_hls_url?: "",
			recording_status?: number,
			room_id: string,
			room_status?: number,
		},
		locked: boolean,
		media: null|{
			content?: string,
			event_id?: string,
			height?: number,
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number|null,
				thumbnail_url?: string,
				thumbnail_width?: number|null,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				has_audio?: boolean,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
			width?: number,
		},
		media_embed: {
			content?: string|null,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		media_metadata?: null|{
			[key: string]: {
				dashUrl?: string,
				e?: "Image"|"RedditVideo"|"AnimatedImage",
				hlsUrl?: string,
				id?: string,
				isGif?: boolean,
				m?: "image/jpg"|"image/png"|"image/gif",
				o?: {
					u: string,
					x: number,
					y: number,
				}[],
				p?: {
					u: string,
					x: number,
					y: number,
				}[],
				s?: {
					gif?: string,
					mp4?: string,
					u?: string,
					x: number,
					y: number,
				},
				status: "valid"|"failed"|"unprocessed",
				x?: number,
				y?: number,
			},
		},
		media_only?: boolean,
		mod_note?: null,
		mod_reason_by?: null,
		mod_reason_title?: null,
		mod_reports: [],
		name: string,
		no_follow?: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"house_only"|"no_ads"|"promo_adult_nsfw"|"some_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
		permalink: string,
		pinned?: boolean,
		poll_data?: {
			is_prediction?: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number,
				vote_count?: number,
			}[],
			prediction_status?: null|"RESOLVED"|"CANCELLED"|"OPEN"|"CLOSED",
			resolved_option_id?: null|string,
			total_stake_amount?: null|number,
			total_vote_count: number,
			tournament_id?: null|string,
			user_selection: null,
			user_won_amount?: null,
			vote_updates_remained?: null,
			voting_end_timestamp: number,
		}|null,
		post_categories?: null,
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery",
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					gif?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					mp4?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					nsfw?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					},
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			},
		},
		previous_visits?: number[],
		promo_layout?: null,
		pwls?: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by?: null,
		removed_by_category?: null|"deleted"|"reddit"|"moderator"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered"|"community_ops"|"anti_evil_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		},
		rte_mode?: "markdown"|"richtext",
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string,
			event_id?: string,
			height?: number,
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number|null,
				thumbnail_url?: string,
				thumbnail_width?: number|null,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				has_audio?: boolean,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
			width?: number,
		},
		secure_media_embed: {
			content?: string|null,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		selftext: string,
		selftext_html: null|string,
		send_replies?: boolean,
		spoiler: boolean,
		steward_reports?: [],
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers?: number,
		subreddit_type: "public"|"user"|"restricted"|"archived"|"gold_restricted"|"employees_only",
		suggested_sort: null|"confidence"|"qa"|"new"|"top"|"controversial"|"old"|"random"|"live",
		thumbnail: string|null,
		thumbnail_height?: number|null,
		thumbnail_width?: number|null,
		title: string,
		top_awarded_type?: null|"INACTIVE"|"ACTIVE",
		total_awards_received?: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: string,
			predictions: {
				body: string,
				created_at: number,
				id: string,
				is_nsfw: boolean,
				is_rtjson: boolean,
				is_spoiler: boolean,
				options: {
					id: string,
					image_url: null,
					text: string,
					total_amount: number|null,
					user_amount: null,
					vote_count: number|null,
				}[],
				resolved_option_id: string|null,
				status: "RESOLVED"|"OPEN"|"CLOSED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED"|"LIVE",
			subreddit_id: string,
			theme_id: "theme_1"|"theme_5"|"theme_4"|"theme_3"|"theme_2"|"theme_8"|"theme_6"|"theme_7",
			total_participants: number,
			tournament_id: string,
		}|null,
		treatment_tags?: ("econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat"|"econ:render:lottie:halloween2020"|"econ:render:lottie:santasnoo"|"econ:render:lottie:champagne"|"econ:render:lottie:sunny")[],
		ups: number,
		upvote_ratio?: number,
		url: string|null,
		url_overridden_by_dest?: string|null,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"house_only"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
		wls?: null|number,
	}[],
	disable_comments?: boolean,
	discussion_type?: null|"CHAT",
	distinguished: null|"moderator"|"admin"|"special",
	domain: string|null,
	domain_override?: null|string,
	downs?: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe",
	embed_url?: null|string,
	event_end?: number,
	event_is_live?: boolean,
	event_start?: number,
	events?: [],
	eventsOnRender?: [],
	from?: null,
	from_id?: null,
	from_kind?: null,
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"View More"|"Learn More"|"Download"|"Install"|"Watch Now"|"Play Now"|"Apply Now"|"Sign Up"|"Get Showtimes"|"Pre-order Now"|"Get a Quote"|"Contact Us"|"See Menu"|"Order Now",
			caption?: string,
			display_url?: string,
			id: number,
			media_id: string,
			outbound_url?: string,
			product?: {
				description: string,
				price?: string,
				title: string,
			},
		}[],
	}|null,
	gilded?: number,
	gildings?: {
		gid_1?: number,
		gid_2?: number,
		gid_3?: number,
	},
	hidden?: boolean,
	hide_score?: boolean,
	href_url?: string,
	id: string,
	ignore_reports?: boolean,
	imp_pixel?: null,
	impression_id?: null,
	impression_id_str?: null,
	is_blank?: boolean,
	is_created_from_ads_ui?: boolean,
	is_crosspostable?: boolean,
	is_gallery?: boolean,
	is_meta?: boolean,
	is_original_content?: boolean,
	is_reddit_media_domain?: boolean,
	is_robot_indexable?: boolean,
	is_self: boolean,
	is_survey_ad?: boolean,
	is_video?: boolean,
	likes?: null|boolean,
	link_flair_background_color?: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	link_flair_template_id?: string|null,
	link_flair_text: null|string,
	link_flair_text_color?: "dark"|"light"|null,
	link_flair_type?: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: string,
		recording_duration_seconds?: number,
		recording_fallback_url?: string,
		recording_hls_url?: "",
		recording_status?: number,
		room_id: string,
		room_status?: number,
	},
	locked?: boolean,
	media: null|{
		content?: string,
		event_id?: string,
		height?: number|null,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			dominant_colors?: {
				color: number[],
				weight: number,
			}[],
			duration?: number,
			entropy?: number,
			height?: number|null,
			html?: string,
			html5?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number|null,
			thumbnail_size?: number,
			thumbnail_url?: string|{
				height: number,
				time?: "00:13:41"|"00:06:50.500"|"00:20:31.500",
				url: string,
				width: number,
				yt$name: "default"|"hqdefault"|"start"|"middle"|"end",
			}[],
			thumbnail_width?: number|null,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			has_audio?: boolean,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			poster_url?: string,
			scrubber_media_url?: string,
			thumbnail_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		reddit_videos?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		},
		type?: string,
		width?: number,
	},
	media_embed: {
		content?: string|null,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	media_metadata?: null|{
		[key: string]: {
			dashUrl?: string,
			e?: "Image"|"RedditVideo"|"AnimatedImage",
			hlsUrl?: string,
			id?: string,
			isGif?: boolean,
			m?: "image/jpg"|"image/png"|"image/gif",
			o?: {
				u: string,
				x: number,
				y: number,
			}[],
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s?: {
				gif?: string,
				mp4?: string,
				u?: string,
				x: number,
				y: number,
			},
			status: "valid"|"failed"|"unprocessed",
			x?: number,
			y?: number,
		},
	},
	media_only?: boolean,
	mobile_ad_url?: string,
	mod_note?: null,
	mod_reason_by?: null,
	mod_reason_title?: null,
	mod_reports?: [],
	name?: string,
	no_follow?: boolean,
	num_comments: number,
	num_crossposts?: number,
	num_reports?: null|number,
	original_link?: null|string,
	outbound_link?: {
		created?: number|null,
		expiration?: number|null,
		url?: string,
	},
	over_18: boolean,
	parent_whitelist_status?: "all_ads"|"promo_adult_nsfw"|"promo_all"|"house_only"|"no_ads"|"some_ads"|"promo_specified"|"promo_adult"|null,
	permalink: string,
	pinned?: boolean,
	poll_data?: null|{
		is_prediction?: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number,
			vote_count?: number,
		}[],
		prediction_status?: null|"RESOLVED"|"CANCELLED"|"OPEN"|"CLOSED",
		resolved_option_id?: null|string,
		total_stake_amount?: null|number,
		total_vote_count: number,
		tournament_id?: null|string,
		user_selection: null,
		user_won_amount?: null,
		vote_updates_remained?: null,
		voting_end_timestamp: number,
	},
	post_categories?: null,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video"|"hosted:video"|"gallery",
	preview?: {
		enabled?: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				},
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number,
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		},
	},
	previous_visits?: number[],
	priority_id?: null,
	product_ids?: [],
	promo_layout?: null|"SPOTLIGHT_VIDEO"|"PRODUCT",
	promoted?: boolean,
	promoted_by?: null|number|"TheGameAwards",
	promoted_display_name?: null|string,
	promoted_url?: null|string,
	pwls?: null|number,
	quarantine?: boolean,
	removal_reason?: null|"legal",
	removed?: boolean,
	removed_by?: null,
	removed_by_category?: null|"deleted"|"reddit"|"moderator"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
	report_reasons?: null|[],
	retrieved_on?: number,
	retrieved_utc?: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	},
	rte_mode?: "markdown"|"richtext",
	saved?: boolean,
	score: number|null,
	secure_media?: null|{
		content?: string,
		event_id?: string,
		height?: number|null,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number|null,
			thumbnail_url?: string,
			thumbnail_width?: number|null,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			has_audio?: boolean,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
		width?: number,
	},
	secure_media_embed?: {
		content?: string|null,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	selftext_html?: null|string,
	send_replies?: boolean,
	show_media?: boolean,
	sk_ad_network_data?: null,
	spam?: boolean,
	spoiler?: boolean|null,
	steward_reports?: [],
	stickied?: boolean,
	subcaption?: string|null,
	subreddit?: string,
	subreddit_id?: string|null,
	subreddit_name_prefixed?: string,
	subreddit_subscribers?: number,
	subreddit_type?: "public"|"restricted"|"archived"|"user"|"gold_restricted"|"private"|"gold_only"|"employees_only",
	suggested_sort?: null|"new"|"confidence"|"top"|"old"|"qa"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null,
	third_party_tracking?: null|string,
	third_party_tracking_2?: null|string,
	thumbnail: string|null,
	thumbnail_height?: null|number,
	thumbnail_width?: null|number,
	title: string,
	top_awarded_type?: null|"INACTIVE"|"ACTIVE",
	total_awards_received?: number,
	tournament_data?: {
		currency: "GAME_TOKENS"|"COINS",
		name: string,
		predictions?: {
			body: string,
			created_at: number,
			id: string,
			is_nsfw: boolean,
			is_rtjson: boolean,
			is_spoiler: boolean,
			options: {
				id: string,
				image_url: null|"https://google.com",
				text: string,
				total_amount: number|null,
				user_amount: null,
				vote_count: number|null,
			}[],
			resolved_option_id: string|null,
			status: "RESOLVED"|"OPEN"|"CLOSED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[],
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_4"|"theme_7"|"theme_3"|"theme_5"|"theme_6"|"theme_2"|"theme_8",
		total_participants: number,
		tournament_id: string,
	}|null,
	treatment_tags?: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:halloween2020"|"econ:render:lottie:santasnoo"|"econ:render:lottie:champagne"|"econ:render:lottie:sunny")[],
	unrepliable_reason?: "BLOCK",
	ups?: number,
	upvote_ratio?: number,
	url: string|null,
	url_overridden_by_dest?: string|null,
	user_reports?: [],
	view_count?: null,
	visited?: boolean,
	whitelist_status?: "all_ads"|"promo_adult_nsfw"|"promo_all"|"house_only"|"no_ads"|"some_ads"|"promo_specified"|"promo_adult"|null,
	wls?: null|number,
}