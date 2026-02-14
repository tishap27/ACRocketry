let morph = {
	init: function () {
		this.textEdit();
		this.wowo();
		this.parallax();
		this.toggler();
		this.appHeight();
		// this.lenis();
		// this.works();
		this.slider();
	},
	wowo: function () {
		if ($(window).width() < 991.98 || $("main.inner-content").length > 0) {
			let wTop = $(window).scrollTop(),
				wHeight = $(window).height(),
				wBottom = wTop + wHeight;
			$(".wowo:not(.animated)").each(function () {
				let me = $(this),
					meTop = me.offset().top,
					meHeight = me.innerHeight(),
					meBottom = meTop + meHeight,
					limitTop = wTop - meHeight,
					limitBottom = wBottom + meHeight;
				if (meTop > limitTop && meBottom < limitBottom) {
					me.addClass("animated");
					setTimeout(function () {
						me.removeClass("wowo animated");
					}, 1500);
				}
			});
		}
	},
	nav: function () {
		if (navigator.userAgent.match(/Trident\/7\./)) {
			document.body.addEventListener &&
				document.body.addEventListener("mousewheel", function () {
					event.preventDefault();
					let wd = event.wheelDelta;
					let csp = window.pageYOffset;
					window.scrollTo(0, csp - wd);
				});
		}
		let sh = $(window).scrollTop();
		if (sh > $("header.navbar").height() && !$(".navbar").hasClass("scroll-start")) {
			$("header").addClass("scroll-start");
		} else if (sh <= $("header.navbar").height() && $(".navbar").hasClass("scroll-start")) {
			$("header").removeClass("scroll-start");
		}
	},
	toggler: function () {
		$(".hamburger").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();

			if (!$(this).hasClass("open")) {
				$(this).addClass("open");
				$(".header-column").addClass("show");
				$("html,body").addClass("hidden");
				$("html,body").attr("data-lenis-prevent", "true");
			} else {
				$(this).removeClass("open");
				$(".header-column").removeClass("show");
				$("html,body").removeClass("hidden");
				$("html,body").removeAttr("data-lenis-prevent");
			}
		});
		$("body").on("click", ".navBurger, .header-row .menu-btn", function (e) {
			e.preventDefault();
			e.stopPropagation();

			if (!$(".nav-box").hasClass("show")) {
				$(this).addClass("open");
				$(".nav-box").addClass("show");
				$("html,body").addClass("hidden");
				if ($("main.wrapper").length > 0) {
					$("html,body").attr("data-lenis-prevent", "true");
				}
			} else {
				$(this).removeClass("open");
				$(".nav-box").removeClass("show");
				$("html,body").removeClass("hidden");
				if ($("main.wrapper").length > 0) {
					$("html,body").removeAttr("data-lenis-prevent");
				}
			}
		});



		this.closeAllPopups = function () {
			$(".hamburger").removeClass("open");
			$(".header-column").removeClass("show");

			$(".navBurger").removeClass("open");
			$(".header-row .menu-btn").removeClass("open");
			$(".nav-box").removeClass("show");
			$(".certifications-pop").removeClass("visible");

			$("a[href='#edge-open']").removeClass("active");
			$(".edge-pop").removeClass("visible");

			$("html,body").removeClass("hidden");
			$("html,body").removeAttr("data-lenis-prevent");

			setTimeout(() => {
				$(".edge-pop").removeClass("is-show");
				$(".certifications-pop").removeClass("is-show");
			}, 170);
		};

		$("footer .back-top").on("click", function (e) {
			// e.preventDefault();
			// e.stopPropagation();

			jQuery("html,body").animate(
				{
					scrollTop: 0,
				},
				400
			);
		});

		// oversight modal handlers removed (modal deleted from HTML)

		$("a[href='#edge-open']").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			// $(this).addClass("active");
			$(this).addClass("active");
			$("html,body").addClass("hidden");
			$("html,body").attr("data-lenis-prevent", "true");

			// var top = $(window).scrollTop();
			// $("body").attr("data-top", top);
			$(".edge-pop").addClass("is-show");
			setTimeout(() => {
				$(".edge-pop").addClass("visible");
			}, 170);
		});

		$(".edge-pop .pop-close ").on("click", function (e) {
			e.preventDefault();
			$("header .date .eye").removeClass("active");
			$("html,body").removeClass("hidden");
			$("html,body").removeAttr("data-lenis-prevent");

			$(".edge-pop").removeClass("visible");
			setTimeout(() => {
				$(".edge-pop").removeClass("is-show");
			}, 170);
		});
		$(".edge-pop .pop-box").on("click", function (e) {
			$("header .date .eye").removeClass("active");
			$("html,body").removeClass("hidden");
			$("html,body").removeAttr("data-lenis-prevent");

			$(".edge-pop").removeClass("visible");
			setTimeout(() => {
				$(".edge-pop").removeClass("is-show");
			}, 170);
		});

		$(".block-home-info .btn-cert").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			$("html,body").addClass("hidden");
			$("html,body").attr("data-lenis-prevent", "true");

			$(".certifications-pop").addClass("is-show");
			setTimeout(() => {
				$(".certifications-pop").addClass("visible");
			}, 170);
		});

		$(".certifications-pop .pop-close ").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			$("html,body").removeClass("hidden");
			$("html,body").removeAttr("data-lenis-prevent");

			$(".certifications-pop").removeClass("visible");
			setTimeout(() => {
				$(".certifications-pop").removeClass("is-show");
			}, 170);
		});
		$(".certifications-pop .pop-box").on("click", function (e) {
			$("html,body").removeClass("hidden");
			$("html,body").removeAttr("data-lenis-prevent");

			$(".certifications-pop").removeClass("visible");
			setTimeout(() => {
				$(".certifications-pop").removeClass("is-show");
			}, 170);
		});

		jQuery("main").on("click", function (e) {
			$(".navBurger").removeClass("open");
			$("html,body").removeClass("hidden");
			// $('html,body').attr('data-lenis-prevent', 'false');
			$("header").removeClass("nav-open");


			$(".nav-box").removeClass("show");
			$(".edge-pop").removeClass("visible");
			setTimeout(() => {
				$(".edge-pop").removeClass("is-show");
			}, 170);
			$(".certifications-pop").removeClass("visible");
			setTimeout(() => {
				$(".certifications-pop").removeClass("is-show");
			}, 170);
		});

		jQuery("body").on("click", ".header-column , .certifications-pop  .box-content , .edge-pop  .box-content ", function (e) {
			e.stopPropagation();
		});
		jQuery(".pop-box").on("click", ".box-content", function (e) {
			e.stopPropagation();
		});

		$(document).on("click", (e) => {
			if (!$(e.target).closest(".header-column").length && $(".hamburger").hasClass("open")) {
				$(".hamburger").removeClass("open");
				$(".header-column").removeClass("show");
				$("html,body").removeClass("hidden");
				$("html,body").removeAttr("data-lenis-prevent");
			}
		});


		$("body").on("click", ".header-column .top .img", function (e) {
			e.stopPropagation();
			e.preventDefault();

			if ($(".hamburger").hasClass("open")) {
				$(".hamburger").removeClass("open");
				$(".header-column").removeClass("show");
				$("html,body").removeClass("hidden");
				$("html,body").removeAttr("data-lenis-prevent");
			}

			if ($(".navBurger, .header-row .menu-btn").hasClass("open")) {
				$(".header-row .menu-btn").removeClass("open");
				$(".nav-box").removeClass("show");
				$("html,body").removeClass("hidden");
				if ($("main.wrapper").length > 0) {
					$("html,body").removeAttr("data-lenis-prevent");
				}
			}
		});
	},

	appHeight: function () {
		const doc = document.documentElement;
		let height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
		$("body").attr("style", "--height:" + height + "px");
		doc.style.setProperty("--vh", jQuery(window).innerHeight() * 0.01 + "px");

		if ($(".scroll-sticky").length > 0) {
			const navbarWidth = $("header .header-column").outerWidth() + 1;
			$(".scroll-sticky").css("--navbar-width", navbarWidth + "px");
		}
	},

	parallax: function () {
		const configs = [
			{
				selector: ".inner-right .img-1",
				direction: "up",
				maxOffset: 130,
				mobileMaxOffset: 100,
				strength: 1,
				breakpoint: 991.98,
			},
			{
				selector: ".inner-right .img-2",
				direction: "down",
				maxOffset: 130,
				mobileMaxOffset: 100,
				strength: 1,
				breakpoint: 991.98,
			},
		];

		let $els = $();
		configs.forEach((config) => {
			const $el = $(config.selector);
			if ($el.length) {
				$els = $els.add($el);
			}
		});

		if ($els.length === 0) return;

		let rafId = null;
		let targetProgress = 0;
		let currentProgress = 0;
		let isInitialized = false;

		function getMaxOffset(config) {
			return window.innerWidth <= config.breakpoint ? config.mobileMaxOffset : config.maxOffset;
		}

		function applyTransform() {
			configs.forEach((config) => {
				const $el = $(config.selector);
				if (!$el.length) return;

				const maxOffset = getMaxOffset(config);

				// parallax !!!!!!!!!!!!!!!!!!!!!!!!

				// let offset = currentProgress * maxOffset;

				const strength = config.strength || 1;
				let offset = currentProgress * strength * maxOffset;
				offset = Math.max(-maxOffset, Math.min(offset, maxOffset));

				if (config.direction === "down") offset = -offset;

				$el.css({
					transform: `translateY(${offset}px)`,
					"--parallax-y": offset + "px",
				});
			});
		}

		function tick() {
			const winH = window.innerHeight;
			const docH = document.documentElement.scrollHeight;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const scrollable = Math.max(docH - winH, 0);

			const rawProgress = 1 - scrollTop / Math.max(scrollable, 1);
			targetProgress = Math.min(Math.max(rawProgress, 0), 1);

			currentProgress += (targetProgress - currentProgress) * 0.08;

			// currentProgress += (targetProgress - currentProgress) * (0.08 * strength);

			if (Math.abs(targetProgress - currentProgress) < 0.001) {
				currentProgress = targetProgress;
			}

			applyTransform();

			if (Math.abs(targetProgress - currentProgress) > 0.001 || !isInitialized) {
				rafId = requestAnimationFrame(tick);
			} else {
				rafId = null;
			}
		}

		$els.css({
			"will-change": "transform",
			transform: "translateY(0)",
			transition: "none",
		});

		$(window)
			.on("scroll.parallax-smooth", () => {
				if (!rafId) rafId = requestAnimationFrame(tick);
			})
			.on("resize.parallax-smooth", () => {
				cancelAnimationFrame(rafId);
				rafId = requestAnimationFrame(tick);
			});

		setTimeout(() => {
			isInitialized = true;
			rafId = requestAnimationFrame(tick);
		}, 100);

		return function destroy() {
			$(window).off(".parallax-smooth");
			cancelAnimationFrame(rafId);
			$els.css({
				transform: "",
				transition: "",
			});
		};
	},

	works: function () {
		let horizontalScroll = null;

		this.handleAnchorLinks = function () {
			$('a[href^="#"]')
				.not('[href="#"]')
				.not('[href="#0"]')
				.on("click", function (e) {
					const href = $(this).attr("href");

					if (href === "#edge-open") {
						return;
					}

					e.preventDefault();

					morph.closeAllPopups();

					const target = $(href);
					if (target.length) {
						const isHorizontal = shouldUseHorizontalScroll();

						if (isHorizontal && horizontalScroll) {
							console.log("locomotiveAC");
							const targetPosition = target.offset().left;
							horizontalScroll.scrollTo(href, {
								duration: 1200,
							});
						} else if (window.lenisVertical) {
							console.log("lenisAC");

							const targetPosition = target.offset().top - $(".header-row").outerHeight();
							window.lenisVertical.scrollTo(targetPosition, {
								duration: 1.2,
							});
						} else {
							console.log("basicAC");

							$("html, body").animate(
								{
									scrollTop: target.offset().top - $(".header-row").outerHeight(),
								},
								800
							);
						}
					}
				});
		};

		function shouldUseHorizontalScroll() {
			return $(window).width() > 991.98 && ($(".scroll-sticky").length > 0 || $(".gallery").length > 0 || $("main.wrapper").hasClass("horizontal"));
		}

		function initScroll() {
			const isHorizontal = shouldUseHorizontalScroll();

			if (window.lenisVertical) {
				if (lenisVerticalRafId) {
					cancelAnimationFrame(lenisVerticalRafId);
					lenisVerticalRafId = null;
				}
				window.lenisVertical.destroy();
				window.lenisVertical = null;
			}

			if (isHorizontal) {
				if (horizontalScroll != null) {
					horizontalScroll.update();
				}
				
				horizontalScroll = new LocomotiveScroll({
					el: document.querySelector("[data-scroll-container]"),
					smooth: true,
					easing: (t) => 1 - Math.pow(1 - t, 2),
					direction: "horizontal",
					multiplier: 0.8,
					gestureDirection: "both",
					smartphone: {
						smooth: true,
						direction: "horizontal",
					},
					tablet: {
						smooth: true,
						direction: "horizontal",
					},
					reloadOnUpdate: true,
				});


				$(".wowo:not(.animated)").each(function () {
					const me = $(this);
					const meLeft = me.offset().left;
					const winWidth = $(window).width();
					if (meLeft < winWidth + 100) {
						me.addClass("animated");
						setTimeout(() => me.removeClass("wowo animated"), 1500);
					}
				});

				window.horizontalScroll = horizontalScroll;


				horizontalScroll.on("scroll", (instance) => {
					let lefts = instance.scroll.x;
					// logo
					// const homeInfoWidth = $(".block-home-info").outerWidth();
					// const headerLeft = $(".header-row").css("padding-left").replace("px", "") - 0;
					// const logoWidth = $(".header-row .logo").outerWidth();
					// const gap = headerLeft - $(".header-column").outerWidth();
					// const startTranslateX = homeInfoWidth - headerLeft - logoWidth;

					// if (lefts > startTranslateX && lefts - startTranslateX < logoWidth + gap) {
					// 	const translateX = lefts - startTranslateX;
					// 	$(".header-row .logo").css("transform", `translateX(-${translateX}px)`);
					// } else if (lefts <= startTranslateX) {
					// 	$(".header-row .logo").css("transform", "none");
					// } else if (lefts > startTranslateX && lefts - startTranslateX > logoWidth + gap) {
					// 	const translateX = logoWidth + gap;
					// 	$(".header-row .logo").css("transform", `translateX(-${translateX}px)`);
					// }

					let totalWidth = $("main.wrapper").outerWidth();

					// progress bar
					const _progress = (lefts / (totalWidth - $(window).width())).toFixed(3) * 100;
					$(".header-column .line").css("--progress-bar-height", `${_progress}%`);

					$(".wowo:not(.animated)").each(function () {
						const me = $(this);
						const meLeft = me.offset().left;
						const winWidth = $(window).width();
						if (meLeft < winWidth + 100) {
							me.addClass("animated");
							setTimeout(() => me.removeClass("wowo animated"), 1500);
						}
					});



					// timeline
					if ($(".timeline").length > 0) {
						let $timelineBox = $(".timeline"),
							$line = $timelineBox.find(".timeline-line .line"),
							pageWidth = $(window).width() / 2;

						const scrollLeft = $timelineBox.offset().left,
							scrollRight = $timelineBox.outerWidth();
						if (scrollLeft <= pageWidth && scrollRight >= pageWidth - scrollLeft) {
							const curr_position = pageWidth - scrollLeft;
							$line.css("--progress-bar-width", `${curr_position}px`);
						} else if (scrollLeft < pageWidth) {
							$line.css("--progress-bar-width", `${scrollRight}px`);
						} else {
							$line.css("--progress-bar-width", "0");
						}

						$(".timeline .line-dot .dot").each(function () {
							const me = $(this);
							const dotLeft = me.offset().left,
								dotRight = me.outerWidth();
							if (dotLeft <= pageWidth && dotRight >= pageWidth - dotLeft) {
								const curr_position = pageWidth - dotLeft;
								me.css("--progress-dot-width", `${curr_position}px`);
							} else if (dotLeft < pageWidth) {
								me.css("--progress-dot-width", `${dotRight}px`);
								me.parents(".item").addClass("active");
							} else {
								me.css("--progress-dot-width", "0");
								me.parents(".item").removeClass("active");
							}
						});
					}
				});


			} else {
				window.lenisVertical = new Lenis({
					duration: 1.2,
					easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
					direction: "vertical",
					gestureDirection: "vertical",
					smooth: true,
					smoothTouch: false,
					touchMultiplier: 2,
				});

				window.lenisVertical.on("scroll", ({ scroll }) => {
					morph.wowo();
				});

				function raf(time) {
					window.lenisVertical.raf(time);
					requestAnimationFrame(raf);
				}
				requestAnimationFrame(raf);

				function raf(time) {
					if (window.lenisVertical) {
						window.lenisVertical.raf(time);
					}
					lenisVerticalRafId = requestAnimationFrame(raf);
				}
				lenisVerticalRafId = requestAnimationFrame(raf);
			}
		}

		function scrollToHashOnLoad() {
			const hash = window.location.hash;

			if (!hash || hash === "#" || hash === "#0") return;

			const $target = $(hash);
			if (!$target.length) return;

			const headerHeight = $(".header-row").outerHeight() || 0;

			const isHorizontal = shouldUseHorizontalScroll();

			// Horizontal LocomotiveScroll
			if (isHorizontal && window.horizontalScroll) {
				window.horizontalScroll.scrollTo(hash, {
					duration: 1200,
				});

			}

			// Vertical Lenis
			else if (window.lenisVertical) {
				const top = $target.offset().top - headerHeight;
				window.lenisVertical.scrollTo(top, { duration: 1.2 });

			}

			// fallback
			else {
				$("html, body").animate(
					{
						scrollTop: $target.offset().top - headerHeight,
					},
					600
				);
			}
		}

		initScroll();
		morph.handleAnchorLinks();
		scrollToHashOnLoad();

		window.addEventListener('hashchange', function (event) {
			event.preventDefault();
			// console.log("hashchange");
			window.scrollTo(0, 0);
			document.documentElement.scrollLeft = 0;
			document.body.scrollLeft = 0;
			scrollToHashOnLoad();
		});

		$(window).on("resize", function () {
			clearTimeout(window.scrollResizeTimeout);
			window.scrollResizeTimeout = setTimeout(() => {
				morph.appHeight();
				initScroll();

			}, 200);
		});

		if ($(".accordion").length > 0) {
			$(".accordion .item .accordion-head").on("click", function (e) {
				e.stopPropagation();

				const me = $(this).parents(".item"),
					_content = me.find(".accordion-body");

				if ($(window).width() > 991.98) {
					if (!me.hasClass("active")) {
						me.siblings(".item").removeClass("active").find(".accordion-body").css("max-width", "0");
						me.addClass("active");
						const c_width = _content.css("max-width", "max-content").outerWidth();
						_content.css("max-width", "0");
						_content.width();
						_content.css("max-width", c_width);
					} else {
						me.removeClass("active");
						_content.css("max-width", "0");
					}

					setTimeout(function () {
						if (horizontalScroll) horizontalScroll.update();
					}, 350);
				} else if ($(window).width() < 991.98) {
					if (!me.hasClass("active")) {
						me.siblings(".item").removeClass("active").find(".accordion-body").slideUp(300);
						me.addClass("active");
						_content.slideDown(300);
					} else {
						me.removeClass("active");
						_content.slideUp(300);
					}
				}
			});

			$(document).on("click", function (e) {
				if (!$(e.target).closest(".accordion").length && $(".accordion .item").hasClass("active")) {
					if ($(window).width() > 991.98) {
						$(".accordion .item").removeClass("active").find(".accordion-body").css("max-width", "0");

						setTimeout(function () {
							if (horizontalScroll) horizontalScroll.update();
						}, 400);
					} else if ($(window).width() < 991.98) {
						$(".accordion .item").removeClass("active").find(".accordion-body").slideUp(300);
					}
				}
			});
		}

		$(window).resize(function () {
			// scrollHorizontal();

			if ($(window).width() > 991.98) {
				$(".header-column .line")[0].style.removeProperty("--progress-bar-height");
			}
		});
	},

	textEdit: function () {
		if ($(".inner-blocks-flex-box ").length > 0) {
			$(".inner-blocks-flex-box .block-item").addClass("wowo fadeInUp");
			$(".inner-blocks-flex-box .inner-right").addClass("wowo fadeIn");
			$(".inner-blocks-flex-box .block-1").addClass("delay-in-1");
			$(".inner-blocks-flex-box .block-2").addClass("delay-in-3");
			$(".inner-blocks-flex-box .block-3").addClass("delay-in-5");
		}

		if ($(".text .edit").length > 0) {
			let dataText = $(".text .edit").data("text");
			dataText = dataText.trim();
			const textArray = dataText.split("/");

			$(".edit").typed({
				strings: textArray,
				stringsElement: null,
				typeSpeed: 80,
				startDelay: 50,
				backSpeed: 50,
				backDelay: 1e3,
				loop: true,
				loopCount: 150,
				showCursor: false,
				cursorChar: "|",
				attr: null,
				contentType: "html",
				callback: function () { },
				preStringTyped: function () { },
				onStringTyped: function () { },
				resetCallback: function () { },
			});
		}

		// text animation
		if ($(".animated-text").length > 0) {
			const $text = $(".animated-text");
			$text.each(function (index) {
				const $this = $(this);
				const lines = $this.html().split("<br>");

				$this.empty();

				$.each(lines, function (index, line) {
					if (line.trim() !== "") {
						const $lineElement = $("<span>").html(line).addClass("wowo fadeInUp");
						$lineElement.css("animation-delay", `${index * 0.1}s`);
						const $span = $("<span>").append($lineElement.clone()).addClass("block");
						$this.append($span);
					}
				});
			});
		}
	},

	lenis: function () {
		let lenis = null;
		if ($(window).width() < 991.98) {
			lenis = new Lenis({
				duration: 0.9,
				easing: (t) => 1 - Math.pow(1 - t, 2),
				direction: "vertical",
			});

			function raf(time) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);
		} else if ($(window).width() > 991.98) {
			if (lenis) {
				lenis.destroy();
				lenis = null;
			}
		}
	},

	slider: function () {
		if ($(".slider").length > 0) {
			$(".slider").slick({
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				infinite: true,
				focusOnSelect: true,
				arrows: false,
				fade: true,
				speed: 500,
				asNavFor: ".slider-stars",
				easing: "linear",
			});

			const length = $(".slider-stars .item").length;
			$(".slider-stars").slick({
				dots: false,
				slidesToShow: length,
				slidesToScroll: 1,
				autoplay: false,
				infinite: false,
				focusOnSelect: true,
				arrows: false,
				fade: false,
				speed: 500,
				asNavFor: ".slider",
			});
		}

		jQuery(".inner-blocks .block-item .text").each(function (i) {
			if (jQuery(this).find(".slider-item").length > 1) {
				jQuery(this)
					.on("init", function () {
						jQuery(this).addClass("show");
					})
					.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: false,
						// autoplaySpeed: 4000,
						arrows: false,
						infinite: true,
						speed: 400,
						dots: true,
						fade: true,
						adaptiveHeight: true,
						// cssEase: "linear",
					});
			} else {
				jQuery(this).find(".slider-box").addClass("show");
				// jQuery(this).find(".slider-control").addClass("hide")
			}
		});
	},
};

let $ = jQuery.noConflict();
$(document).ready(function () {
	morph.init();



	// const $cursor = $(".cursor");
	// const $cursorInner = $(".cursor-inner");

	// if (!$cursor.length || !$cursorInner.length) return;

	// const cursorWidth = $cursor.width();
	// const cursorHeight = $cursor.height();

	// $(document).mousemove(function (e) {
	// 	requestAnimationFrame(() => {
	// 		$cursor.css({
	// 			opacity: "1",
	// 			left: e.clientX - cursorWidth / 2,
	// 			top: e.clientY - cursorHeight / 2,
	// 		});
	// 	});
	// });

	// $(document).mousedown(function () {
	// 	$cursorInner.css({
	// 		opacity: "1",
	// 		transform: "scale(0.8)",
	// 	});
	// });

	// $(document).mouseup(function () {
	// 	$cursorInner.css({
	// 		opacity: "0.7",
	// 		transform: "scale(1)",
	// 	});
	// });

	// const $interactiveElements = $("a, button, input, select, textarea, .interactive , div.back-top , .navBurger ,.block-text-and-silder .slider-stars .item");

	// $interactiveElements.on({
	// 	mouseenter: function () {
	// 		$cursor.addClass("cursor-hover");
	// 	},
	// 	mouseleave: function () {
	// 		$cursor.removeClass("cursor-hover");
	// 	},
	// });
});


$(window).on("load", function () {

	setTimeout(function () {
		morph.works();
	}, 0)
});

// $(window).on("scroll", function () {
// 	morph.wowo();
// });

// $(window).on("resize", function () {
// 	morph.appHeight();
// });