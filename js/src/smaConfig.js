var smdConfig = {
	"desktop":{
		'content-open':{
			"smd1":{
				"triggerDom":".content-open .title-amin .title-box",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-open .title-amin .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-open .title-amin .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-open .title-amin .title-box .title-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-legends':{
			"smd1":{
				"triggerDom":".content-legends .title-box",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-legends .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-legends .title-box .break-block'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			},
			"smd2":{
				"triggerDom":".content-legends .text-image-left",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-legends .text-image-left .text-img .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-time':{
			"smd1":{
				"triggerDom":".content-time",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .title-box .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .tip'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-virtual-tour-intro':{
			"smd1":{
				"triggerDom":".content-virtual-tour-intro",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-virtual-tour-intro .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-virtual-tour-intro .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-virtual-tour-intro .title-box .title-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-text1':{
			"smd2":{
				"triggerDom":".content-text1 .text-image-right .all-anim .text-img",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text1 .text-image-right .all-anim .text-img .content-img'
				}
				],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-floor':{
			"smd1":{
				"triggerDom":".content-floor",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .title-box .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .roll-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			},
			"smd2":{
				"triggerDom":".content-floor .floor-imgs",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-imgs .floor1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-imgs .floor2'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-imgs .floor3'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-imgs .floor4'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			},
			"smd3":{
				"triggerDom":".content-floor .floor-title",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-title .floor-title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-date'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-carousel':{
			"smd1":{
				"triggerDom":".content-carousel",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box .roll-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-text2':{
			"smd1":{
				"triggerDom":".content-text2 .text-image-left",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text2 .text-image-left .text-img .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		},
		'content-news':{
			"smd1":{
				"triggerDom":".content-news",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-left'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[641,1000000]
			},
			"smd2":{
				"triggerDom":".content-news .news-right .title-d",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box .roll-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			},
			"smd3":{
				"triggerDom":".content-news .news-right .img-btns",
				'triggerPlay':0.95,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .img-btns .news1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .img-btns .news2'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .img-btns .news3'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .img-btns .news4'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[641,1000000]
			}
		},
		'content-text3':{
			"smd1":{
				"triggerDom":".content-text3 .text-image-right",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .text-image-right .text-img .title-describe2 .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			},
			"smd4":{
				"triggerDom":".content-text3",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .roll-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			},
			"smd5":{
				"triggerDom":".content-text3 .text-next",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-text3 .text-next .break-red'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-text3 .text-next .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .floor-date'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		}
	},
	"mobile":{
		'content-open':{
			"smd1":{
				"triggerDom":".content-open .title-amin .title-box",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-open .title-amin .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-open .title-amin .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-open .title-amin .title-box .title-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-legends':{
			"smd1":{
				"triggerDom":".content-legends",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-legends .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-legends .title-box .break-block'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			},
			"smd2":{
				"triggerDom":".content-legends .text-image-left .text-img",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-legends .text-image-left .text-img .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-time':{
			"smd1":{
				"triggerDom":".content-time",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .title-box .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-time .tip'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-text1':{
			"smd1":{
				"triggerDom":".content-text1 .text-image-right",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text1 .text-image-right .all-anim .text-img .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-floor':{
			"smd1":{
				"triggerDom":".content-floor",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-floor .title-box .title-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			},
			"smd2":{
				"triggerDom":".content-floor .floor-title",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-floor .floor-title .floor-title-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-carousel':{
			"smd1":{
				"triggerDom":".content-carousel",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-carousel .title-box .roll-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-text2':{
			"smd1":{
				"triggerDom":".content-text2 .text-image-left",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text2 .text-image-left .text-img .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			}
		},
		'content-news':{
			"smd1":{
				"triggerDom":".content-news .news-right .title-d",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box h1'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box .break-block'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-news .news-right .title-d .title-box .title-text'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			},
		},
		'content-text3':{
			"smd1":{
				"triggerDom":".content-text3 .text-image-right .text-img .title-describe2",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .text-image-right .text-img .title-describe2 .content-img'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,640]
			},
			"smd2":{
				"triggerDom":".content-text3 .text-next",
				'triggerPlay':0.9,
				'triggerReset':0.99,
				'triggerOffset':0,
				'ani_type':'base',
				'ani_align':'start',
				'ani_stagger_t':0.1,
				'ani':[{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-text3 .text-next .break-red'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					}],
					'duration':0.5,
					'dom':'.content-text3 .text-next .title-text'
				},{
					'change':[{
						'proper':'opacity',
						'from':0,
						'to':1
					},{
						'proper':'y',
						'from':80,
						'to':0
					}],
					'duration':0.5,
					'dom':'.content-text3 .floor-date'
				}],
				'needbroadcast':false,
				'inited':false,
				'debug':false,
				'enable':true,
				'reset':true,
				'widthScope':[1,1000000]
			}
		}
	}
};