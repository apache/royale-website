
// ================================================================================== //

	// # Document on Ready
	// # Document on Resize
	// # Document on Scroll
	// # Document on Load

	// # Sticky Header
	// # Leader Post Size
	// # Header
	// # Post Sticky Items
	// # Sticky Sidebar Widget
	// # Sticky Sidebar
	// # Feature Section
	// # Feature Parallax
	// # Page Title
	// # Page Settings
	// # Basic Elements
	// # Isotope
	// # Parallax Section
	// # Section Settings
	// # Social Bar For Post
	// # Scroll Direction
	// # Global Variables
	// # Scrollbar Width
	// # Full Page

	// # Sticky Section

// ================================================================================== //


var GRVE = GRVE || {};
var debugJs = false;
var spinner = '<div class="grve-spinner"></div>';
var addFeatureSpinner =  false;
var hiddenMenuItemsAnimation = true;
var hiddenaAreaMinWidth = 550;
var gridEqual = true;
var wooThumbCarouselItems = 4;
var featureSliderHandler = true;

// Animate Mask Options
var maskLayers = 3;
var maskColorClasses =  ['grve-bg-primary-1','grve-bg-light','grve-bg-dark'];

var deviceAnimAppear =  false;
if( 1 == movedo_grve_main_data.device_animations ) {
	deviceAnimAppear =  true;
}

(function($){

	"use strict";


	// # Document on Ready
	// ============================================================================= //
	GRVE.documentReady = {
		init: function(){
			GRVE.safeBtnArea.init();
			GRVE.pageSettings.bodyLoader();
			GRVE.svgAnimation.init();
			GRVE.pageSettings.removeVideoBg();
			GRVE.pageSettings.addVideoBg();
			GRVE.sectionSettings.init();
			GRVE.slideToggleMenu.init( '#grve-hidden-menu', '#grve-hidden-menu .grve-menu' );
			GRVE.slideToggleMenu.init( '#grve-responsive-anchor', '#grve-responsive-anchor .grve-menu' );
			GRVE.slideToggleMenu.init( '#grve-main-header.grve-header-side', '#grve-main-menu.grve-vertical-menu .grve-menu' );
			GRVE.slideToggleMenu.init( '#grve-sidearea', '.widget_nav_menu' );
			if( $('#grve-feature-section').length > 0 ){
				GRVE.featureSection.init( '#grve-feature-section' );
				GRVE.featureSize.init( '#grve-feature-section' );
				GRVE.featureParallax.init();
			}
			if( $('.grve-page-title').length > 0 ){
				GRVE.featureSection.init( '.grve-page-title' );
				GRVE.featureSize.init( '.grve-page-title' );
			}
			GRVE.pageSettings.init();
			GRVE.leaderPostSize.init();
			GRVE.isotope.init();
			GRVE.isotope.noIsoFilters();
			GRVE.basicElements.init();
			GRVE.pageSettings.lightBox();
			GRVE.commentsFormToggle.init();
			GRVE.fullPage.init();
			GRVE.pillingPage.init();
			GRVE.parallaxSection.init('.grve-section.grve-bg-parallax');
		}
	};

	GRVE.reCall = {
		init: function(){
			GRVE.sectionSettings.init();
			GRVE.isotope.init();
		}
	};


	// # Document on Resize
	// ============================================================================= //
		GRVE.documentResize = {
		init: function(){
			if( $('#grve-feature-section').length > 0 ){
				GRVE.featureSize.init( '#grve-feature-section' );
			}
			if( $('.grve-page-title').length > 0 ){
				GRVE.featureSize.init( '.grve-page-title' );
			}
			GRVE.sectionSettings.init();
			GRVE.basicElements.imageText();
			GRVE.pageSettings.resizeVideoBg();
		}
	};

	// # Document on Scroll
	// ============================================================================= //
	GRVE.documentScroll = {
		init: function(){
			GRVE.socialBar.init();
			GRVE.pageSettings.onePageMenu();
		}
	};

	// # Document on Load
	// ============================================================================= //
	GRVE.documentLoad = {
		init: function(){
			GRVE.stickyHeaderTypes.init();
			GRVE.anchorSticky.init();
			GRVE.socialBar.init();
			GRVE.stickySidebarWidget.init();
			GRVE.stickySidebar.init();
			GRVE.basicElements.iconBox();
			GRVE.pageSettings.fullHeightSeparator();
			GRVE.pageSettings.columnEffect();
			GRVE.wooThumbCarousel.init();
			if ( $('#grve-body').hasClass( 'compose-mode' ) ) {
				GRVE.isotope.init();
			}
			// Location Hash
			if (window.location.hash) {
				setTimeout(function() {
					var target = window.location.hash;

					if( $(target).length ){
						if ( $(target).hasClass('grve-tab-content') || $(target).hasClass('grve-accordion-content')  ) {
							var tabLink =  $('.grve-tab-link[data-rel="' + target + '"]:visible');
							if ( tabLink.length ) {
								tabLink.click();
								setTimeout(function() {
									GRVE.pageSettings.linkGoToTop( tabLink );
								}, 500);
							}
						} else {
							$('html, body').scrollTop( $(target).offset().top );
						}
					}
				}, 0);
			}
		}
	};
	// # Fixed Custom Position Column
	// ============================================================================= //
	GRVE.customPositionColumn = {
		init: function(){
			$('.grve-column.grve-custom-position').each(function(){
				var $column = $(this),
					columnW, columnX, windowW;

				setup();

				if( !isMobile.any() ) {
					$(window).on('resize', resizer);
				} else {
					$(window).on('orientationchange', resizer);
				}
				function setup(){
					resetPosition();
					updateParams();
					if( columnW + columnX >= windowW ){
						resetPosition();
						fixedPositionRight();
					}

					if( columnX < 0 ){
						resetPosition();
						fixedPositionLeft();
					}
				}
				function updateParams(){
					columnW = $column.outerWidth();
					columnX = $column.offset().left;
					windowW = $(window).width();
				}
				function resizer(){
					var delay;
					window.clearTimeout(delay);
					delay = window.setTimeout(function() {
						setup();
					}, 200);
				}
				function fixedPositionRight(){
					var newPosX = ( windowW - columnW ) - $column.offset().left;
					$column.css({'left' : newPosX, 'right' : '' });
				}
				function fixedPositionLeft(){
					var newPosX = - $column.offset().left;
					$column.css({'left' : newPosX, 'right' : '' });
				}
				function resetPosition(){
					$column.css({'left' : '', 'right' : ''});
				}
			});
		}
	};

	// SVG Animation
	GRVE.svgAnimation = {
		init : function(){
			if(bodyLoader){
				return false;
			}
			var $svg = $('.grve-svg-icon');
			$svg.each(function(){
				var $icon = $(this),
					duration = $icon.data('duration'),
					id = $icon.attr('id'),
					file = $icon.data('file'),
					myVivus,
					parentDelay = 0;

					if( $icon.parents('.grve-element').hasClass('grve-animated-item') ){
						parentDelay = $icon.parents('.grve-element').data('delay');
					}

					$icon.appear(function() {
						setTimeout(function () {
							myVivus = new Vivus( id, {
								duration : duration,
								file : file,
								type: 'async',
								start : 'inViewport'
							});
						}, parentDelay);
					},{accX: 0, accY: 0});
			});
		}
	};

	// # Safe Button Area
	// ============================================================================= //
	GRVE.safeBtnArea = {
		init : function(){

			var $safeButton = $('.grve-safe-button'),
				$area = $('#grve-safebutton-area'),
				$logo = $area.find('.grve-logo'),
				$closeBtn = $area.find('.grve-close-button'),
				$themeContent = $('#grve-theme-content'),
				$link = $area.find('a[href*="#"]:not( [href="#"] )'),
				openArea = false;

			$safeButton.on('click',function(e){
				e.preventDefault();
				animateMask();
			});

			$closeBtn.on('click',function(e){
				e.preventDefault();
				animateMask();
			});


			// For One Page
			$link.on('click',function(e){
				var target = $(this.hash),
					targetHash = this.hash,
					dataValue = this.hash.replace('#','');
				if ( target.length && ( target.hasClass('grve-section') || target.hasClass('grve-bookmark') || target.hasClass('grve-tab-content') || target.hasClass('grve-accordion-content') ) ) {
					e.preventDefault();
					animateMask();
				}
			});


			var $maskWrapper = $('.grve-mask-wrapper');
			if( $maskWrapper.length ) {
				var nmbLayers = $maskWrapper.data('layers'),
					colors = $maskWrapper.data('mask-colors').split(','),
					$logo = $maskWrapper.find('.grve-safebutton-logo'),
					layers = false,
					animation = false,
					strHTML = '';
				addLayers();
			}

			function addLayers(){
				for(var i = 0; i < nmbLayers; ++i) {
					var color = colors instanceof Array && colors[i] ? colors[i] : colors[0];
					strHTML += '<div class="grve-mask-layer grve-layer-' + (i+1) + '" style="background-color:' + color + ';"></div>';
				}
				$(strHTML).appendTo( $maskWrapper );
				layers = true;
			}

			function animateMask(){
				if(layers && !animation) {
					animation = true;
					$maskWrapper.addClass('grve-layer-animate');
					var $animLayers = $('.grve-mask-layer'),
						layersLength = nmbLayers-1,
						delay = 1500 * 0.375,
						smallDelay;

					toggleLogo(true);
					onEndAnimation($animLayers[layersLength], onEnd);
					window.clearTimeout(smallDelay);
					smallDelay = window.setTimeout(onBeforeEnd, delay);
				}
			}

			var support = { animations : (typeof Modernizr === 'undefined' ? true : Modernizr.cssanimations) },
				animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
				animEndEventName = animEndEventNames[ (typeof Modernizr === 'undefined' ? 'animation' : Modernizr.prefixed( 'animation' )) ];

			function onEndAnimation(el, callback){
				var onEndCallbackFn = function( ev ) {
					if( support.animations ) {
						if( ev.target != this ) return;
						$(this).off( animEndEventName, onEndCallbackFn );
					}
					if( callback && typeof callback === 'function' ) { callback.call(); }
				};
				if( support.animations ) {
					$(el).on( animEndEventName, onEndCallbackFn );
				}
				else {
					onEndCallbackFn();
				}
			}

			function toggleLogo(show){
				if($logo.length){
					if(show) {
						$logo.addClass('show');
					} else {
						$logo.removeClass('show');
					}
				}
			}
			function onEnd() {
				$maskWrapper.removeClass('grve-layer-animate');
				toggleLogo(false);
				animation = false;
			}

			function onBeforeEnd() {
				if( !openArea ){
					$area.addClass('grve-show-area');
					$logo.addClass('grve-show');
					$('html, body').scrollTop(0);
					$('body').addClass('grve-open-safebutton-area');
					$themeContent.css({'visibility':'hidden', 'height' : 0, 'overflow':'hidden' });
					openArea = true;
				} else {
					$area.removeClass('grve-show-area');
					$logo.removeClass('grve-show');
					$('html, body').scrollTop(0);
					$('body').removeClass('grve-open-safebutton-area');
					$themeContent.css({'visibility':'', 'height' : '', 'overflow':'' });
					openArea = false;
					$("#grve-header").removeClass('grve-sticky-animate grve-scroll-down grve-scroll-up');
					// Hide Back to top
					$('.grve-back-top').removeClass('show').removeAttr("style");
				}
				GRVE.reCall.init();
			}
		}
	};

	// # Content Height with Sidebar
	// ============================================================================= //
	GRVE.commentsFormToggle = {
		init: function(){
			var $btn = $('#reply-title'),
				$form = $('#commentform');

			$btn.on('click',function(){
				if( $(this).hasClass('open') ){
					$form.slideUp();
					$(this).removeClass('open');
				} else {
					$form.slideDown();
					$(this).addClass('open');
				}
				btnGoToTop( $(this) );
			});

			function btnGoToTop( btn ){
				var $this = btn,
					btnTop = $this.offset().top,
					headerHeight = $('#grve-header').length && $('#grve-header').data('sticky') != 'none' ? $('#grve-main-header').outerHeight() : 0,
					offset       = wpBarHeight + headerHeight;
				if( btnTop > 0 ){
					$('html, body').delay(300).animate({
						scrollTop: btnTop - offset
					}, 900, 'easeInOutCubic');
					return false;
				}
			}
		}
	};

	// # Sticky Header
	// ============================================================================= //
	GRVE.stickyHeaderTypes = {
		init : function(){
			var $header = $('#grve-header'),
				$stickyHeader = $header.find('#grve-main-header'),
				stickyHeader = $stickyHeader.hasClass('grve-header-logo-top') ? '#grve-bottom-header' : '#grve-main-header',
				stickyType = $header.data('sticky'),
				stickyDevice = $header.data('devices-sticky'),
				responsiveThreshold = parseInt(movedo_grve_main_data.responsive_thershold) - 1;

			if( stickyType === 'simple' ) {
				GRVE.stickyHeader.init({
					header: '#grve-header',
					stickyHeader : '#grve-main-header',
					headerOfsset : false,
					scrollDirection : false,
					responsive : [responsiveThreshold,6000]
				});
			}

			if( stickyType === 'shrink') {
				GRVE.stickyHeader.init({
					header: '#grve-header',
					stickyHeader : '#grve-main-header',
					headerOfsset : false,
					scrollDirection : false,
					responsive : [responsiveThreshold,6000]
				});
			}

			if( stickyType === 'advanced') {
				GRVE.stickyHeader.init({
					header: '#grve-header',
					stickyHeader : '#grve-main-header',
					headerOfsset : true,
					stickyTopHeader : true,
					scrollDirection : true,
					responsive : [responsiveThreshold,6000]
				});
			}

			if( stickyType === 'movedo') {
				GRVE.stickyHeader.init({
					header : '#grve-header',
					stickyHeader : '#grve-movedo-sticky-header',
					headerOfsset : true,
					stickyTopHeader : false,
					scrollDirection : true,
					responsive : [responsiveThreshold,6000]
				});
			}

			if( stickyDevice === 'yes' ) {
				GRVE.stickyHeader.init({
					header : '#grve-responsive-header',
					stickyHeader : '#grve-main-responsive-header',
					headerOfsset : false,
					stickyTopHeader : false,
					scrollDirection : false,
					responsive: [0,responsiveThreshold + 1]
				});
			}
		}
	};

	// # Simple Sticky Header
	// ============================================================================= //
	var goToTop = false;
	GRVE.stickyHeader = {
		config : {
			header: '#grve-header',
			stickyHeader : '#grve-main-header',
			stickyTopBar : '#grve-top-bar.grve-sticky-topbar .grve-wrapper',
			headerOfsset : false,
			stickyTopHeader : false,
			scrollDirection : false,
			responsive : [1023,6000]
		},
		init : function(settings){

			$.extend(this.config, settings);

			var $header = $(this.config.header),
				$headerSticky = $(this.config.stickyHeader),
				$topBarSticky = $(this.config.stickyTopBar),
				headerOfsset = this.config.headerOfsset,
				stickyTopHeader = this.config.stickyTopHeader,
				scrollDir = this.config.scrollDirection,
				minWidth = this.config.responsive[0],
				maxWidth = this.config.responsive[1],
				lastScroll = 0,
				tolerance = { up : 0, down : 0 },
				frameSize = 0,
				delay, headerH, topbarH, windowW, headerT, offset, topPosition, wpBarHeight;

			if( !$header ) return;
			setup();

			if( !isMobile.any() ) {
				$(window).on('resize', resizer);
			} else {
				tolerance = { up : 6, down : 5 };
				$(window).on('orientationchange', resizer);
			}

			function setup(){
				resetParams();
				updateParams();
				if (windowW + scrollBarWidth > minWidth &&  windowW + scrollBarWidth < maxWidth) {
					update();
					$(window).on('scroll.stickyHeader', update);
				} else {
					$(window).off('scroll.stickyHeader', update);
				}
			}
			function resetParams(){
				removeFixedHeader();
			}
			function updateParams(){
				wpBarHeight = $('body').hasClass('admin-bar') && $(window).width() > 783 ? 32 : 0;
				wpBarHeight = $('body').hasClass('admin-bar') && $(window).width() > 600  && $(window).width() < 783 ? 46 : wpBarHeight;
				headerH = $header.outerHeight();
				windowW = $(window).width();
				frameSize = $('body').hasClass('grve-framed') && windowW + scrollBarWidth > tabletPortrait ? $('#grve-frames').data('frame-size') : 0;
				headerT = getOffset( $header );
				topbarH = $('#grve-top-bar').length && ( $('#grve-top-bar').hasClass('grve-sticky-topbar') || $('#grve-top-bar').hasClass('grve-device-sticky-topbar') ) ? $('#grve-top-bar').outerHeight() : 0;
				offset  = !headerOfsset ? headerT - topbarH : headerT + headerH;
				offset  = Math.round(offset);
				topPosition = !stickyTopHeader ? topbarH : -(headerH - topbarH);
			}
			function resizer(){
				window.clearTimeout(delay);
				delay = window.setTimeout(function() {
					setup();
				}, 200);
			}
			function getOffset(el){
				return el.offset().top - frameSize - wpBarHeight;
			}
			function removeFixedTopBar(){
				$('#grve-top-bar').removeClass('grve-fixed');
				$header.css({ 'top' : '' });
				$topBarSticky.css({ 'top' : '' });
			}
			function addFixedTopBar(){
				$('#grve-top-bar').css({'height' : topbarH }).addClass('grve-fixed');
				$topBarSticky.css({ 'top' : frameSize + wpBarHeight });
			}
			function removeFixedHeader(){
				$header.removeClass('grve-fixed').css({ 'top' : '' });
				$headerSticky.css({ 'top' : '' });
				$('#grve-top-bar').removeClass('grve-fixed').css({ 'height' : '' });
			}
			function addFixedHeader(){
				$header.addClass('grve-fixed');
				$headerSticky.css({ 'top' : topPosition + frameSize + wpBarHeight });
			}
			function addSticky(){
				$header.addClass('grve-sticky-header grve-sticky-animate');
			}
			function removeSticky(){
				$header.removeClass('grve-sticky-header grve-scroll-up');
			}
			function addScrollUp(){
				$header.addClass('grve-scroll-up').removeClass('grve-scroll-down');
			}
			function addScrollDown(){
				$header.addClass('grve-scroll-down').removeClass('grve-scroll-up');
			}
			function toleranceExceeded(scroll, direction) {
			  return Math.abs(scroll - lastScroll) >= tolerance[direction];
			}
			function shouldUnpin(scroll, toleranceExceed, sticky){
				var scrollingDown = scroll > lastScroll;
				return scrollingDown && toleranceExceed && sticky;
			}
			function shouldPin(scroll, toleranceExceed, sticky){
				  var scrollingUp  = scroll < lastScroll;
				return scrollingUp && toleranceExceed && sticky;
			}

			function update(){
				var scroll = $(window).scrollTop(),
					scrollDirection = scroll > lastScroll ? 'down' : 'up',
					toleranceExceed = toleranceExceeded(scroll, scrollDirection),
					sticky = false;

				if( scroll < 0 || goToTop ){
					return;
				}

				if (scroll >= offset) {
					addFixedHeader();
				} else {
					removeFixedHeader();
				}

				if (scroll >= 0 ) {
					addFixedTopBar();
				} else {
					removeFixedTopBar();
				}

				if (scroll > offset) {
					addSticky();
					sticky = true;
				} else {
					removeSticky();
					sticky = false;
				}

				if(shouldUnpin(scroll, toleranceExceed, sticky) && scrollDir) {
					addScrollDown();
				}
				else if(shouldPin(scroll, toleranceExceed, sticky) && scrollDir) {
					addScrollUp();
				}

				lastScroll = scroll;
			}

		}
	};

	// # Leader Post Size
	// ============================================================================= //
	GRVE.leaderPostSize = {
		init : function(){
			var $leaderElement = $('.grve-blog-leader.grve-layout-1.grve-movedo-style');

			if( !$leaderElement.length ) return;

			var windowWidth,
				maxHeight,
				leaderHeight;

			$leaderElement.each(function(){
				var $this = $(this),
					$leaderPost = $this.find('.grve-post-leader'),
					resizing  = false;


				resetHeight();
				$(window).smartresize(resetHeight);

				function resetHeight(){
					if(!resizing){
						resizing  = true;

						$leaderPost.css({
							'height' : ''
						});

						updateParams();
					}
				}

				function updateParams() {
					windowWidth = $(window).width();

					$this.imagesLoaded('always',function(){
						maxHeight = $this.outerHeight();
						leaderHeight = $leaderPost.outerHeight();

						setLeaderHeight();
					});
				}

				function setLeaderHeight(){
					if( maxHeight > leaderHeight && windowWidth + scrollBarWidth > tabletPortrait ){
						$leaderPost.css({
							'height' : maxHeight,
							'visibility' : 'visible'
						});
					} else {
						$leaderPost.css({
							'visibility' : 'visible'
						});
					}

					resizing = false;
				}
			});
		}
	};

	// # Anchor Sticky
	// ============================================================================= //
	GRVE.anchorSticky = {
		init : function(){
			var $anchor = $('.grve-anchor-menu'),
				delay;
			if( $anchor.length ){

				this.checkDevice();
				this.update();

				$(window).on('scroll', GRVE.anchorSticky.update);
				if( !isMobile.any() ) {
					$(window).on("resize",resizer);
				} else {
					$(window).on("orientationchange",resizer);
				}
			}

			function resizer(){
				window.clearTimeout(delay);
				delay = window.setTimeout(function() {
					GRVE.anchorSticky.checkDevice();
				}, 300);
			}
		},
		checkDevice : function(){
			GRVE.anchorSticky.device = false;
			var $anchor = $('.grve-anchor-menu');
			if( $(window).width() + scrollBarWidth < tabletPortrait ) {
				GRVE.anchorSticky.device = true;
				$anchor.addClass('grve-anchor-responsive');
			} else {
				$anchor.removeClass('grve-anchor-responsive');
			}

			GRVE.anchorSticky.resetAnchor();
			GRVE.anchorSticky.updateParams();
		},
		resetAnchor : function(){
			var $anchor = $('.grve-anchor-menu'),
				$anchorWrapper = $anchor.find('.grve-anchor-wrapper');

			$anchorWrapper
				.removeClass('grve-sticky grve-go-up grve-go-down')
				.css( GRVE.anchorSticky.doTranslate(0) );

			GRVE.anchorSticky.topOffset = 0;
			GRVE.anchorSticky.topPos = 0;
			GRVE.anchorSticky.mLogoW = 0;
			GRVE.anchorSticky.mElementsW = 0;
		},
		updateParams : function(){
			var $anchor = $('.grve-anchor-menu'),
				$header = $('#grve-header'),
				styckyType = $header.data('sticky'),
				headerH = $header.outerHeight(),
				anchorT = $anchor.offset().top,
				topBarH = $('#grve-top-bar').length && styckyType != 'none' ? $('#grve-top-bar').outerHeight() : 0,
				frameSize = $('#grve-frames').length && !GRVE.anchorSticky.device ? $('#grve-frames').data('frame-size') : 0,
				$mLogo = $('#grve-movedo-sticky-header .grve-logo'),
				$mElements = $('#grve-movedo-sticky-header .grve-header-elements-wrapper');

			GRVE.anchorSticky.topOffset = anchorT - topBarH - frameSize - wpBarHeight;
			GRVE.anchorSticky.topPos = topBarH + frameSize + wpBarHeight;
			GRVE.anchorSticky.mLogoW = $mLogo.length ? $mLogo.outerWidth() + frameSize : 0;
			GRVE.anchorSticky.mElementsW = $mElements.length ? $mElements.outerWidth() + frameSize : 0;

		},
		getHeaderH : function(){
			var headerH = 0,
				$header = $('#grve-header'),
				device = GRVE.anchorSticky.device;

			if( !device ){
				var $mainHeader = $('#grve-main-header'),
					styckyType = $header.data('sticky');
				if( styckyType != 'none' && styckyType != 'advanced' && styckyType != 'movedo' ) {
					if( $header.hasClass('grve-sticky-header') ) {
						headerH = $header.data('sticky-height');
					} else {
						headerH = $header.outerHeight();
					}
				}
			} else {
				var $mainHeader = $('#grve-responsive-header'),
					styckyType = $header.data('devices-sticky');
				if( styckyType == 'yes' ) {
					headerH = $header.data('devices-sticky-height');
				}
			}

			return headerH;

		},
		update : function(){
			var $anchor = $('.grve-anchor-menu'),
				$header = $('#grve-header'),
				$anchorWrapper = $anchor.find('.grve-anchor-wrapper'),
				styckyType = $header.data('sticky'),
				device = GRVE.anchorSticky.device;

			var scroll = $(window).scrollTop(),
				topOffset = GRVE.anchorSticky.topOffset - GRVE.anchorSticky.getHeaderH(),
				topPos = GRVE.anchorSticky.topPos + GRVE.anchorSticky.getHeaderH(),
				positionY = $header.data('sticky-height'),
				sticky = false;

			if( scroll >= topOffset ){
				sticky = true;
				$anchorWrapper
					.addClass('grve-sticky')
					.css({'top' : topPos});
			} else {
				sticky = false;
				$anchorWrapper
					.removeClass('grve-sticky')
					.css({'top' : ''});
			}

			if( !device ){
				if( styckyType == 'movedo' ){
					GRVE.anchorSticky.movedoAnchor(sticky);
				}

				if(sticky && $header.hasClass('grve-scroll-up') ){
					$anchorWrapper
						.addClass('grve-go-down')
						.removeClass('grve-go-up')
						.css( GRVE.anchorSticky.doTranslate(positionY) );
				} else if(sticky && $header.hasClass('grve-scroll-down') ){
					$anchorWrapper
						.addClass('grve-go-up')
						.removeClass('grve-go-down')
						.css( GRVE.anchorSticky.doTranslate(0) );
				} else {
					$anchorWrapper
						.removeClass('grve-go-up')
						.removeClass('grve-go-down')
						.css( GRVE.anchorSticky.doTranslate(0) );
				}
			}
		},
		doTranslate : function(value){
			return {
				'-webkit-transform' : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
				'-moz-transform'    : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
				'-ms-transform'     : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
				'-o-transform'      : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
				'transform'         : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)'
			};
		},
		movedoAnchor : function(sticky){
			var $anchor = $('.grve-anchor-menu'),
				$header = $('#grve-header'),
				$anchorWrapper = $anchor.find('.grve-anchor-wrapper'),
				leftPos = $('body').hasClass('grve-boxed') ? 'auto' : GRVE.anchorSticky.mLogoW + 2,
				rightPos = $('body').hasClass('grve-boxed') ? 'auto' : GRVE.anchorSticky.mElementsW + 2,
				size = $('body').hasClass('grve-boxed') ? '' : 'auto',
				headerH = $header.data('sticky-height');

			if( sticky ) {
				$anchorWrapper.css({
					'line-height' : headerH - 2 +'px',
					'left' : leftPos,
					'right' : rightPos,
					'width' : size,
					'z-index' : 9999
				}).addClass('grve-movedo-anchor');
			}
			if( sticky && $header.hasClass('grve-scroll-up') ) {
				$anchorWrapper.css({
					'line-height' : '',
					'left' : '',
					'right' : '',
					'width' : '',
					'z-index' : ''
				});
			}
		}
	};
	// # Menu Slide or Toggle
	// ============================================================================= //
	GRVE.slideToggleMenu = {

		init: function( parrent, element ){

			if( !$(element).length ) return;

			var $menu       = $(element),
				$menuParent = $(parrent),
				$menuItem   = $menu.find('li.menu-item-has-children > a'),
				menuType    = $menuParent.hasClass('grve-slide-menu') ? 'slide' : 'toggle',
				$arrow      = $('<i class="grve-arrow"></i>'),
				$goBack     = $('<li class="grve-goback"><a href="#"><i class="grve-arrow"></i></a></li>');



			if( menuType === 'slide' ) {
				// Add Arrows
				$arrow.appendTo( $menuItem.parent() );
				// Add Go Back Button for Slide Menu
				$goBack.prependTo( $menuItem.parent().find('>ul') );
			} else {
				// Add Arrows
				$arrow.appendTo( $menuItem );
			}

			$menuItem.on('tap click',function(e){
				var $this = $(this),
					link  = $this.attr('href'),
					open  = false;

				if((link != '#' || link === '#') && menuType == 'toggle' ) {
					if( !$this.parent().hasClass('open') && !open ) {
						e.preventDefault();
						$this.parent().addClass('open');
						toggle( $this, open );
					} else {
						open = true;
						toggle( $this, open );
						$this.parent().removeClass('open');
					}
				} else if( link === '#' && menuType == 'slide' ) {
					e.preventDefault();
					var listLevel  = $this.parents('ul').length,
						$firstItem = $this.parent().find('ul').first(),
						menuOffset = $menu.offset().top,
						offset     = $this.offset().top,
						title      = $this.html();

						appendTitle( title, $firstItem );

					$firstItem.addClass('show').css({ 'top' : - ( offset - menuOffset ) });
					var firstItemH = $firstItem.outerHeight();

					if( $('body').hasClass('rtl') ) {
						animRightMenu( firstItemH, listLevel );
					} else {
						animLeftMenu( firstItemH, listLevel );
					}
				}

			});

			if( menuType === 'slide' ) {
				var $arrowBtn = $menuItem.parent().find('.grve-arrow');
				$arrowBtn.on('click',function(){
					var $this = $(this),
						listLevel  = $this.parents('ul').length,
						$firstItem = $this.parent().find('ul').first(),
						menuOffset = $menu.offset().top,
						offset     = $this.offset().top,
						title      = $this.parent().find('a').first().html();

					appendTitle( title, $firstItem );

					$firstItem.addClass('show').css({ 'top' : - ( offset - menuOffset ) });
					var firstItemH = $firstItem.outerHeight();

					if( $('body').hasClass('rtl') ) {
						animRightMenu( firstItemH, listLevel );
					} else {
						animLeftMenu( firstItemH, listLevel );
					}

				});
			}

			$('li.grve-goback a').on('click', function(e) {
				e.preventDefault();
				var listLevel  = $(this).parents('ul ul').length - 1,
					$firstItem = $(this).closest('.sub-menu'),
					firstItemH = $firstItem.closest('.menu-item-has-children').closest('ul').height();

				setTimeout(function(){
					$firstItem.removeClass('show');
				},300);
				if( $('body').hasClass('rtl') ) {
					animRightMenu( firstItemH, listLevel );
				} else {
					animLeftMenu( firstItemH, listLevel );
				}
			});

			function toggle( $this, open ){
				var $subMenu = $this.parent().find('>ul');
				if( open ) {
					$subMenu.slideUp(200);
				} else {
					$subMenu.slideDown(200);
				}
			}

			function animLeftMenu( height, listLevel ) {
				$menu.parent().height(height);
				$menu.css('transform', 'translate3d(' + - listLevel * 100 + '%,0,0)');
			}

			function animRightMenu( height, listLevel ) {
				$menu.parent().height(height);
				$menu.css('transform', 'translate3d(' + listLevel * 100 + '%,0,0)');
			}

			function appendTitle( title, list ){
				if( list.find('.grve-goback .grve-item').length ) return;
				$(title).appendTo( list.find('> .grve-goback a') );
			}
		}

	};

	// # Sticky Sidebar Widget
	// ============================================================================= //
	GRVE.stickySidebarWidget = {
		init: function(){

			var $stickyWidget = $('#grve-content .grve-sticky-widget'),
				sidebarWidget = false;

			$stickyWidget.each(function(){
				var $this = $(this);

				if( $this.length > 0 ) {

					if( $('.grve-sticky-widget').parent().parent().is('#grve-sidebar') ) {
						sidebarWidget = true;
					}

					if( sidebarWidget && $('#grve-sidebar').hasClass('grve-fixed-sidebar') ) return;

					var $content         = sidebarWidget ? $('#grve-main-content .grve-main-content-wrapper') : $this.parents('.grve-row'),
						$sidebar         = $this.parent(),
						headerHeight     = $('#grve-header').length && $('#grve-header').data('sticky') != 'none' ? $('#grve-header').data('sticky-height') : 0,
						anchorHeight     = $('.grve-anchor-menu').length ? $('.grve-anchor-menu').outerHeight() : 0,
						topOffset        = headerHeight + anchorHeight + 40;

					var windowWidth,sidebarWidth,sidebarHeight,contentTop,contentPadding,sidebarTop;

					var scrolling        = false,
						sidebarAnimation = false,
						resizing         = false;

					updateParams();

					if( windowWidth + scrollBarWidth > tabletPortrait ) {
						$(window).on('scroll', checkSidebar);
					}
					$(window).smartresize(resetScroll);

				}

				function checkSidebar() {
					if( !sidebarAnimation ) {
						sidebarAnimation = true;
						updateSidebarPosition();
					}
				}

				function resetScroll() {
					if( !resizing ) {
						resizing = true;
						$sidebar.removeClass('fixed').attr('style', '');
						updateParams();
					}
				}

				function updateParams() {
					windowWidth    = $(window).width();
					sidebarWidth   = $sidebar.width();
					sidebarHeight  = $sidebar.height();
					contentTop     = $content.offset().top;
					contentPadding = parseInt( $content.css('padding-top') );
					sidebarTop     = $this.offset().top;

					$(window).off('scroll', checkSidebar);

					if( windowWidth + scrollBarWidth > tabletPortrait ) {
						$(window).on('scroll', checkSidebar);
					}
					resizing = false;
				}

				function updateSidebarPosition() {
					var contentHeight = $content.height(),
						scrollTop     = $(window).scrollTop(),
						topPosition   = sidebarTop - contentTop - topOffset - contentPadding;

					if( scrollTop < sidebarTop - topOffset ) {
						$sidebar.removeClass('fixed').attr('style', '');
					} else if( scrollTop >= sidebarTop - topOffset && scrollTop < sidebarTop + contentHeight - sidebarHeight - topOffset ) {
						$sidebar.addClass('fixed').css({ 'top' : - topPosition, 'position' : 'fixed', 'width' : sidebarWidth });
					} else {
						if( $sidebar.hasClass('fixed') ) {
							$sidebar.removeClass('fixed').css({ 'top' : contentHeight - sidebarHeight + 'px', 'position' : 'relative' });
						}
					}
					sidebarAnimation =  false;
				}
			});
		}
	};

	// # Sticky Sidebar
	// ============================================================================= //
	GRVE.stickySidebar = {
		init: function(){

			var $sidebar = $('#grve-sidebar');
			if( $sidebar.length > 0 && $sidebar.hasClass('grve-fixed-sidebar') ) {

				var $content         = $('#grve-main-content .grve-main-content-wrapper'),
					$sidebarWrapper  = $sidebar.find('.grve-wrapper'),
					headerHeight     = $('#grve-header').length && $('#grve-header').data('sticky') != 'none' ? $('#grve-header').data('sticky-height') : 0,
					anchorHeight     = $('.grve-anchor-menu').length ? $('.grve-anchor-menu').outerHeight() : 0,
					topOffset        = headerHeight + anchorHeight + 100,
					bottomOffset     = 0;

				var windowWidth,sidebarWidth,sidebarHeight,contentPadding,sidebarTop;

				var scrolling        = false,
					sidebarAnimation = false,
					resizing         = false;

				updateParams();

				if( windowWidth + scrollBarWidth > tabletPortrait ) {
					$(window).on('scroll', checkSidebar);
				}

				$(window).smartresize(resetScroll);
			}

			function checkSidebar() {
				if( !sidebarAnimation ) {
					sidebarAnimation = true;
					updateSidebarPosition();
				}
			}

			function resetScroll() {
				if( !resizing ) {
					resizing = true;
					$sidebarWrapper.removeClass('fixed').attr('style', '');
					updateParams();
				}
			}

			function updateParams() {
				windowWidth    = $(window).width();
				sidebarWidth   = $sidebar.width();
				sidebarHeight  = $sidebar.height();
				contentPadding = parseInt( $content.css('padding-top') );
				sidebarTop     = $sidebar.offset().top;

				if( $('.grve-navigation-bar').length ) {
					bottomOffset = $('.grve-navigation-bar').outerHeight() + 60;
				}

				$(window).off('scroll', checkSidebar);

				if( windowWidth + scrollBarWidth > tabletPortrait ) {
					checkSidebar();
					$(window).on('scroll', checkSidebar);
				}

				$sidebar.css({
					'visibility' : 'visible'
				});

				resizing = false;
			}

			function updateSidebarPosition() {
				var contentHeight = $content.height(),
					scrollTop     = $(window).scrollTop();

				if( scrollTop < sidebarTop - topOffset + contentPadding ) {
					$sidebarWrapper.removeClass('fixed').attr('style', '');
				} else if( scrollTop >= sidebarTop - topOffset + contentPadding && scrollTop < sidebarTop + contentHeight - sidebarHeight - topOffset + contentPadding - bottomOffset ) {
					$sidebarWrapper.addClass('fixed').css({ 'top' : topOffset, 'position' : 'fixed', 'width' : sidebarWidth });
				} else {
					if( $sidebarWrapper.hasClass('fixed') ) {
						$sidebarWrapper.removeClass('fixed').css({ 'top' : contentHeight - sidebarHeight - bottomOffset + 'px', 'position' : 'relative' });
					}
				}
				sidebarAnimation =  false;
			}

		}
	};

	// # Set Feature Section Size
	// ============================================================================= //
	GRVE.featureSize = {
		init: function( section ){
			this.$section = $(section);
			this.topBar = $('#grve-top-bar');
			this.header = $('#grve-header');
			this.responsiveHeader = $('#grve-responsive-header');
			this.frameSize = $('body').hasClass('grve-framed') ? $('#grve-frames').data('frame-size') : 0;
			this.updateParams();
			var featureHeight;

			if( this.$section.hasClass('grve-fullscreen') ) {
				featureHeight = this.fullscreenSize();
			} else if( this.$section.hasClass('grve-custom-size') ) {
				featureHeight = this.customSize();
			}
		},
		updateParams : function(){
			this.windowH = $(window).height();
			this.topBarH = this.getTopBarHeight();
			this.headerH = this.getHeaderHeight();
		},
		getTopBarHeight : function(){
			var height = 0;
				if( this.topBar.length && !this.topBar.hasClass('grve-sticky-topbar') ) {
					height = this.topBar.outerHeight();
				}
			return height;
		},
		getHeaderHeight : function(){
			var height = 0;

			if( this.header.length && this.header.is(':visible') && !this.header.hasClass('grve-overlapping') && !this.header.hasClass('grve-header-below') ) {
				height = this.header.outerHeight();
			}

			if( this.responsiveHeader.length && this.responsiveHeader.is(':visible') && !this.header.hasClass('grve-responsive-overlapping') && !this.header.hasClass('grve-header-below') ) {
				height = this.responsiveHeader.outerHeight();
			}

			return height;
		},
		fullscreenSize : function(){
			var sectionH = this.windowH - this.headerH - this.topBarH - (this.frameSize * 2);
			this.$section.css( 'height', sectionH).find('.grve-wrapper').css( 'height', sectionH);
			return sectionH;
		},
		customSize : function(){
			var initHeight = this.$section.data('height'),
				newHeight  = ((this.windowH * initHeight) / 100);
			if( newHeight > this.windowH ) {
				newHeight = this.windowH;
			}
			this.$section.css( 'height', newHeight).find('.grve-wrapper').css( 'height', newHeight);
			return newHeight;
		}
	};

	// # Feature Section
	// ============================================================================= //
	GRVE.featureSection = {
		init : function(section){
			var $section = $(section),
				$bgImage = $section.find('.grve-bg-image'),
				$bgVideo = $section.find('.grve-bg-video'),
				$spinner = $(spinner),
				animateContent = false;

			if( $bgImage.length ) {
				// Load Background Images
				loadFeatureImage();
				// Add Spinner
				if( addFeatureSpinner ) {
					addSpinner();
				}
			} else if( !$bgImage.length && $bgVideo.length ) {
				// Add Spinner
				if( addFeatureSpinner ) {
					addSpinner();
				} else {
					showFeature();
				}
			} else {
				// Play Animation Content
				featureAnimation( $section );
			}

			// Load Background Images
			function loadFeatureImage(){
				var totalBgImage = $bgImage.length,
					waitImgDone = function() {
						totalBgImage--;
						if (!totalBgImage) {
							// Remove Spinner
							if( addFeatureSpinner ) {
								setTimeout(function () {
									removeSpinner();
								}, 600);
							} else {
								showFeature();
							}
						}
					};
				$bgImage.each(function () {
					function imageUrl(input) {
						return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
					}
					var image = new Image(),
						$that = $(this);
					image.src = imageUrl($that.css('background-image'));
					$(image).on('load',waitImgDone).on( "error", waitImgDone );
				});
			}

			// Add Spinner
			function addSpinner(){
				$spinner.appendTo( $section );
				$section.addClass('grve-with-spinner');
			}

			// Remove Spinner
			function removeSpinner(){
				$spinner.fadeOut(900,function(){
					$spinner.remove();
					// Show Feature Section
					showFeature();
				});
			}

			// Show Feature Section
			function showFeature(){
				var $overlay   = $section.find('.grve-bg-overlay'),
					$content   = $section.find('.grve-content'),
					$bgImage   = $section.find('.grve-bg-image'),
					$bgVideo   = $section.find('.grve-bg-video');

				$bgImage.addClass('show');
				$bgVideo.addClass('show');
				$overlay.addClass('show');

				animateContent = true;
				if( $section.hasClass('grve-with-slider') ) {
					// Init Feature Slider
					featureSlider();
				} else {
					// Play Feature Animation
					featureAnimation( $section );
				}
			}

			// Feature Slider
			function featureSlider(){
				var $slider         = $('#grve-feature-slider'),
					pauseHover      = $slider.attr('data-slider-pause') == 'yes' ? true : '',
					sliderSpeed     = parseInt( $slider.attr('data-slider-speed') ) ? parseInt( $slider.attr('data-slider-speed') ) : 6000,
					transition      = $slider.attr('data-slider-transition'),
					slidersLength   = $slider.find('.grve-slider-item').length,
					pagination      = $slider.attr('data-pagination') != 'no' ? true : false,
					$nextNav        = $slider.parent().find('.grve-carousel-next'),
					$prevNav        = $slider.parent().find('.grve-carousel-prev'),
					loop = true,
					animateOut      = false,
					animateIn       = false,
					stopSlider      = false;

				// Slider Trantition
				if( transition != 'slide' ){
					animateOut = 'carousel-' + transition + '-out';
					animateIn = 'carousel-' + transition + '-in';
				}
				$slider.on('initialized.owl.carousel changed.owl.carousel',function(event){
					var current = event.item.index,
						$currentSlide = $(event.target).find('.grve-slider-item-wrapper').eq(current),
						sliderColor = $currentSlide.find('.grve-slider-item').attr('data-header-color'),
						color = 'grve-' + sliderColor;

					if( !$currentSlide.length) return;

					// Slider Animation
					featureAnimation( $currentSlide );

					// Set Header Color
					if( !$('#grve-main-header').hasClass('grve-header-side') ) {
						$('#grve-main-header').removeClass('grve-light grve-dark').addClass(color);
					}

					// Set Navigation Color
					$('#grve-feature-section .grve-carousel-navigation').removeClass('grve-light grve-dark grve-default').addClass(color);
					$('#grve-feature-section .owl-controls').removeClass('grve-light grve-dark grve-default').addClass(color);
				});

				if ( $slider.find('.grve-slider-item').length == 1 ) {
					loop = false;
				}

				$slider.owlCarousel({
					items : 1,
					loop : loop,
					autoplay : true,
					autoplayTimeout : sliderSpeed,
					autoplayHoverPause : pauseHover,
					smartSpeed : 500,
					dots : pagination,
					animateOut : animateOut,
					animateIn : animateIn,
					itemClass : 'grve-slider-item-wrapper'
				});

				$(window).on('scroll',autoplayHandler);

				function autoplayHandler(){
					var scroll = $(window).scrollTop();
					if( scroll > 300 && !stopSlider && featureSliderHandler ){
						stopSlider = true;
						$slider.trigger('stop.owl.autoplay');
					} else if( scroll < 300 && stopSlider && featureSliderHandler ) {
						stopSlider = false;
						$slider.trigger('play.owl.autoplay');
					}
				}

				// Go to the next item
				$nextNav.on('click', function() {
					$slider.trigger('next.owl.carousel');
				});
				// Go to the previous item
				$prevNav.on('click', function() {
					$slider.trigger('prev.owl.carousel');
				});
			}

			// Feature Animation
			function featureAnimation(section){
				var $section = section,
					$wrapper = $section.find('.grve-title-content-wrapper'),
					effect = $section.find('.grve-content').data('animation'),
					effectClass = 'grve-animate-' + effect,
					delay = 200,
					cnt = 0,
					contentItems = {
						graphic     : $section.find(' .grve-graphic '),
						subheading  : $section.find(' .grve-subheading '),
						title       : $section.find(' .grve-title '),
						description : $section.find(' .grve-description '),
						titleMeta   : $section.find(' .grve-title-meta-content '),
						button1     : $section.find(' .grve-btn-1 '),
						button2     : $section.find(' .grve-btn-2 '),
						gotoArrow   : $section.find(' #grve-goto-section-wrapper ')
					};

				// Show Content
				$section.find('.grve-content').addClass('show');

				if( !$wrapper.hasClass('grve-bg-none') ){
					contentItems = {
						wrapper : $wrapper,
						gotoArrow   : $section.find(' #grve-goto-section-wrapper ')
					};
				}

				// Add Animation Class
				$.each( contentItems, function( key, item ) {
					$(item).removeClass('grve-animate-fade-in grve-animate-fade-in-up grve-animate-fade-in-down grve-animate-fade-in-left grve-animate-fade-in-right grve-animate-zoom-in grve-animate-zoom-out');

					if( $(item).length ){
						cnt++;
						if( effect != 'none' ){
							setTimeout(function(){
								$(item).addClass( effectClass );
							},cnt * delay);
						}
					}
				});
			}
		}
	};

	// # Feature Parallax
	// ============================================================================= //
	var featureParallaxScroll = false;
	GRVE.featureParallax = {
		init: function(){
			var section = $('#grve-feature-section'),
				scroll = false,
				smallDelay;

			if( !section.hasClass('grve-bg-parallax') && !section.hasClass('grve-bg-advanced-parallax') && !section.hasClass('grve-bg-fixed-section') ) {
				return;
			}

			// Create Parallax Wrapper
			section.children().not('.grve-separator-bottom').wrapAll('<div class="grve-parallax-wrapper"></div>');

			if( section.find('video').length ){
				section.find('video').trigger('play');
			}

			updateParallax();

			// Add window events
			$(window).on('resize', function(){
				window.clearTimeout(smallDelay);
				smallDelay = window.setTimeout(function () {
					updateParallax();
				}, 100);
			});
			$(window).on('scroll', onWindowScroll);

			function onWindowScroll(){
				if( window.requestAnimationFrame ) {
					if(!scroll){
						window.requestAnimationFrame( updateParallax );
						scroll = true;
					}
				} else {
					updateParallax();
				}
			}

			function updateParallax(){
				var wrapper = section.find('.grve-parallax-wrapper');
				var parallaxType;
				if( section.hasClass('grve-bg-advanced-parallax') ){
					parallaxType = 'advanced';
				} else if( section.hasClass('grve-bg-fixed-section') ){
					parallaxType = 'fixed';
				} else {
					parallaxType = 'classic';
				}

				if( inViewport( section ) ){
					// References
					var scrollTop = $( window ).scrollTop();
					var sectionTop = section.offset().top;
					var sectionW = section.outerWidth();
					var sectionH = section.outerHeight();
					var position = scrollTop * 0.2;
					var elementH = sectionH + sectionTop;
					var opacity = ( ( ( sectionH + sectionTop ) - scrollTop ) / sectionH ).toFixed(2);
					var scale = ( ( ( sectionH + sectionTop ) + scrollTop ) / sectionH );
					var content = section.find('.grve-wrapper, .grve-background-wrapper');
					if( tSupport ){

						if( parallaxType == 'advanced' ) {
							wrapper.css({
								'position' : 'fixed',
								'top' : sectionTop,
								'height' : elementH,
								'width' : sectionW,
								transform: 'translate3d( 0px' + ', ' + -position + 'px' + ', 0px)',
								visibility: 'visible'
							});
							content.css({
								// 'opacity' : opacity
							});
						} else if( parallaxType == 'fixed' ) {
							wrapper.css({
								'position' : 'fixed',
								'top' : sectionTop,
								'height' : elementH,
								'width' : sectionW,
								visibility: 'visible'
							});
						} else {
							wrapper.css({
								'position' : 'relative',
								'height' : elementH,
								'width' : sectionW,
								transform: 'translate3d( 0px' + ', ' + position + 'px' + ', 0px)',
								visibility: 'visible'
							});
						}
					}
				} else {
					wrapper.css({
						'position' : 'relative'
					});
				}
				scroll = false;
			}

			function inViewport( element ){
				var winTop = $( window ).scrollTop();
				var winBottom = winTop + $( window ).height();
				var elTop = element.offset().top;
				var elBottom = elTop + element.outerHeight();
				return ( winBottom >= elTop && winTop <= elBottom );
			}

		}
	};

	// # Woocommerce Carousel Thumb Gallery
	// ============================================================================= //
	GRVE.wooThumbCarousel = {
		init : function(){
			var $thumbs = $('#grve-product-feature-image').find('.thumbnails'),
				$thumbsWrapper = $thumbs.find('.grve-thumbnails-wrapper'),
				$thumbsInner = $thumbs.find('.grve-thumbnails-inner'),
				$items = $thumbs.find('.grve-thumb-item'),
				$arrowPrev = $('<i class="grve-icon-nav-up-small grve-arrow-prev"></i>'),
				$arrowNext = $('<i class="grve-icon-nav-down-small grve-arrow-next"></i>'),
				wrapper = false,
				smallDelay,
				wrapperH,
				slidesLength,
				cnt;


			if( !$thumbs.length || $items.length <= wooThumbCarouselItems ) {
				$thumbsWrapper.css({
					'visibility' : 'visible'
				});
				return false;
			}

			setSlider();
			$(window).on('resize', function(){
				window.clearTimeout(smallDelay);
				smallDelay = window.setTimeout(function () {
					setSlider();
				}, 300);
			});

			function addWrapper(){
				if( !wrapper ) {
					for (var i = 0, len = $items.length; i < len; i += wooThumbCarouselItems) {
						$items.slice(i, i + wooThumbCarouselItems).wrapAll('<div class="grve-thumb-wrapper"/>');
					}

					wrapperH = $('.grve-thumb-wrapper').first().outerHeight();
					slidesLength = $('.grve-thumb-wrapper').length - 1;

					$thumbsWrapper.css({
						'height' : wrapperH,
						'overflow' : 'hidden',
						'visibility' : 'visible'
					});

					addArrows();
					$thumbsInner.addClass('grve-with-transition');

					wrapper = true;
				}
			}

			function addArrows(){
				$arrowPrev.appendTo( $thumbs );
				$arrowNext.appendTo( $thumbs );
				// Add Classes
				$arrowPrev.addClass('grve-disable-arrow');
				$arrowNext.removeClass('grve-disable-arrow');

				cnt = 0;
				bindEvents();
			}

			function moveSlide(n){
				$thumbsInner.css( doTranslate( n * wrapperH ) );
			}

			function setSlider(){
				if( $(window).width() + scrollBarWidth < tabletPortrait && wrapper) {
					resetSlider();
				} else if( $(window).width() + scrollBarWidth > tabletPortrait && !wrapper) {
					addWrapper();
				}
			}

			function resetSlider(){
				$thumbsInner.removeClass('grve-with-transition');
				$thumbsInner.css( doTranslate( 0 ) );
				$items.unwrap();
				$thumbsWrapper.css({
					'height' : '',
					'overflow' : 'visible',
					'visibility' : 'visible'
				});

				$arrowPrev.remove();
				$arrowNext.remove();

				wrapper = false;
			}

			function bindEvents(){
				$arrowNext.on('click.thumb-arrows',function(){
					var $that = $(this);
					if( cnt > - slidesLength ){
						cnt--;
						moveSlide( cnt );
						$arrowPrev.removeClass('grve-disable-arrow');
					}
					if(cnt == -slidesLength ){
						$that.addClass('grve-disable-arrow');
					}
				});

				$arrowPrev.on('click.thumb-arrows',function(){
					var $that = $(this);
					if( cnt < 0 ){
						cnt++;
						moveSlide( cnt );
						$arrowNext.removeClass('grve-disable-arrow');
					}
					if(cnt == 0 ){
						$that.addClass('grve-disable-arrow');
					}
				});
			}

			function doTranslate( value ){
				return {
					'-webkit-transform' : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
					'-moz-transform'    : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
					'-ms-transform'     : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
					'-o-transform'      : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)',
					'transform'         : 'translate3d(0px, ' + value + 'px, 0px) translateZ(0)'
				};
			}
		}
	};

	// # Woocommerce Products Refresh
	// ============================================================================= //
	GRVE.wooProductsLoop = {
		init : function(){
			GRVE.isotope.init();
			GRVE.basicElements.wooProduct();
			GRVE.basicElements.hovers();
		}
	};

	// # Page Settings
	// ============================================================================= //
	GRVE.pageSettings = {

		init: function(){
			this.safeButtonAnimation();
			this.mainMenu();
			this.columnFullHeight();
			this.columnCustomSize();
			this.setClippingWrappers();
			this.grveModal();
			this.gotoFirstSection();
			this.bgLoader();
			this.imageLoader();
			this.fitVid();
			this.hiddenArea();
			this.backtoTop();
			this.animatedBg();
			this.onePageSettings();
			this.socialShareLinks();
			this.productImageParallax();

			this.postSocials();
			this.fixedFooter();
		},
		setClippingWrappers: function(){
			var $element = $('.grve-clipping-animation'),
				wrapper = '<div class="grve-clipping-wrapper"><div class="grve-clipping-content"></div></div>';
			if( isMobile.any() && !deviceAnimAppear ) {
				$element.removeClass('grve-clipping-animation');
			} else {
				$element.wrapInner( wrapper );
				$element.each(function(){
					var $that = $(this),
						$wrapper = $that.find('.grve-clipping-wrapper');
					if( $that.hasClass('grve-colored-clipping') ) {
						var color = $that.data('clipping-color'),
							overlay = '<div class="grve-clipping-overlay grve-bg-' + color + '"></div>';
						$(overlay).appendTo( $wrapper );
					}
				});
				this.clippingAppear();
			}
		},
		clippingAppear: function(){
			var $clippingEl = $('.grve-clipping-animation');
			if( bodyLoader || $('body').hasClass('page-template-template-full-page') || $('body').hasClass('page-template-template-pilling-page') ){
				return;
			}
			if( isMobile.any() && !deviceAnimAppear ) {
				$clippingEl.removeClass('grve-clipping-animation');
			} else {
				$clippingEl.each(function() {
					var $that = $(this),
						timeDelay = $that.attr('data-delay');

					$that.appear(function() {
						setTimeout(function () {
							GRVE.pageSettings.clippingAnimated( $that );
						}, timeDelay);
					},{accX: 0, accY: -150});
				});
			}
		},
		clippingAnimated: function( $element ){
			var delay = 700,
				$overlay = $element.find( '.grve-clipping-overlay' );

			$element.addClass('grve-clipping-animated');

			if ( $element.hasClass('grve-colored-clipping') ) {
				setTimeout(function(){
					$element.addClass('grve-clipping-show-content');
				},delay);

				delay = 1400;
			}
			setTimeout(function(){
				$overlay.remove();
				$element.removeClass('grve-clipping-animation grve-clipping-animated grve-colored-clipping grve-clipping-show-content');
				GRVE.basicElements.animAppear();
			},delay);
		},
		bodyLoader: function(){
			var $overflow = $('#grve-loader-overflow'),
				$loader   = $('.grve-spinner'),
				$link = $('a');

			if( $overflow.length > 0 ){
				bodyLoader = true;
			} else {
				return;
			}

			if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
				window.onpageshow = function(event) {
					if (event.persisted) {
						$overflow.removeClass('grve-visible grve-hide');
						window.location.reload();
					}
				};
			} else if(navigator.userAgent.indexOf('Firefox') != -1) {
				window.onunload = function(){};
			}

			if( $overflow.hasClass('grve-page-transition') ) {
				var exclude = ['.grve-no-transition', '.grve-toggle-modal'],
					comp = new RegExp(location.host);
				if ( $('#grve-body').hasClass( 'prdctfltr-ajax' ) ) {
					$('.woocommerce-pagination a').addClass('grve-no-transition');
				}
				$('a:not(' + exclude + ')').on('click',function(e){
					var link = this;
					if( comp.test(link.href) && link.href.split(/\?|#/)[0] != location.href.split(/\?|#/)[0] && link.target != '_blank' && link.href[0] != '#') {
						if( link.href.indexOf( '#' ) == -1 &&
							link.href.indexOf( 'skype:' ) == -1 &&
							link.href.indexOf( 'mailto:' ) == -1 &&
							link.href.indexOf( 'tel:' ) == -1 &&
							link.href.indexOf( 'jpg' ) == -1 &&
							link.href.indexOf( 'jpeg' ) == -1 &&
							link.href.indexOf( 'png' ) == -1 &&
							link.href.indexOf( 'gif' ) == -1 &&
							link.href.indexOf( 'bmp' ) == -1 &&
							link.href.indexOf( 'pdf' ) == -1 &&
							link.href.indexOf( 'zip' ) == -1 &&
							link.href.indexOf('add-to-cart=') == -1 ) {
							e.preventDefault();
							var newLocation = this.href;
							$overflow.addClass('grve-visible').removeClass('grve-hide');
							setTimeout(function(){
								window.location = newLocation;
							}, 600);
						}
					}
				});
			}

			var images = $('img, .grve-bg-image');
			$.each(images, function(){
				var el = $(this),
				image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
				if(image && image !== '' && image !== 'none')
					images = images.add($('<img>').attr('src', image));
				if(el.is('img'))
					images = images.add(el);
			});

			images.imagesLoaded(function(){
				setTimeout(function () {
					if( $overflow.hasClass('grve-page-transition') ) {
						$overflow.removeClass('grve-visible').addClass('grve-hide');
						setTimeout(function(){
							bodyLoader = false;
							GRVE.basicElements.animAppear();
							GRVE.pageSettings.clippingAppear();
							GRVE.svgAnimation.init();
							GRVE.basicElements.counter();
						}, 1200);
					} else {
						$loader.fadeOut(500);
						$overflow.delay(500).fadeOut(700,function(){
							bodyLoader = false;
							GRVE.basicElements.animAppear();
							GRVE.pageSettings.clippingAppear();
							GRVE.svgAnimation.init();
							GRVE.basicElements.counter();
						});
					}
				}, 600);
			});

		},
		addVideoBg: function(){
			$('.grve-yt-bg-video').each(function() {
				var $element = $(this);
				var url = $element.data("video-bg-url");
				var videoID = url.match( /[\\?&]v=([^&#]*)/ )[ 1 ];
				if( '' != videoID ) {
					insertYouTubeVideo($element, videoID );
				}
			});
			$('.grve-html5-bg-video').each(function() {
				var $element = $(this);
				GRVE.pageSettings.resizeVideoBgElement( $element );
			});
			function insertYouTubeVideo($element, youtubeId, counter) {
				if ("undefined" == typeof YT || "undefined" === typeof YT.Player) {
					counter = "undefined" === typeof counter ? 0 : counter;
					if (100 < counter) {
						console.warn("Too many attempts to load YouTube api");
						return;
					}
					setTimeout(function() {
						insertYouTubeVideo($element, youtubeId, counter++);
					}, 100);
					return;
				}
				var startSeconds = $element.data('video-start') != undefined ? parseInt( $element.data('video-start') ) : 0;
				var endSeconds = $element.data('video-end') != undefined ? parseInt( $element.data('video-end') ) : 0;
				var $container = $element.prepend('<div class="grve-bg-youtube-video"><div class="inner"></div></div>').find(".inner");
				var ytPlayer = new YT.Player($container[0], {
					width: "100%",
					height: "100%",
					videoId: youtubeId,
					playerVars: {
						playlist: youtubeId,
						iv_load_policy: 3,
						enablejsapi: 1,
						disablekb: 1,
						autoplay: 1,
						controls: 0,
						showinfo: 0,
						rel: 0,
						loop: 1,
						start: startSeconds,
						end: endSeconds,
						wmode: "transparent"
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
				function onPlayerReady(event) {
					event.target.mute().setLoop(true);
				}
				function onPlayerStateChange(event) {
					if ( 0 != startSeconds || 0 != endSeconds ) {
						if (event.data === YT.PlayerState.ENDED) {
							ytPlayer.loadVideoById({
								videoId: youtubeId,
								startSeconds: startSeconds,
								endSeconds: endSeconds
							});
						}
					}
				}
				// Resize Video
				GRVE.pageSettings.resizeVideoBgElement( $element );
			}
		},
		resizeVideoBg: function(){
			$videoBg.each(function(){
				GRVE.pageSettings.resizeVideoBgElement( $(this) );
			});
		},
		resizeVideoBgElement: function( $element ){
			var videoEl,
				videoW,
				videoH,
				marginLeft,
				marginTop,
				containerW = $element.innerWidth(),
				containerH = $element.innerHeight(),
				ratio1 = 16,
				ratio2 = 9;

			if (containerW / containerH < ratio1 / ratio2) {
				videoW = containerH * (ratio1 / ratio2);
				videoH = containerH;
				videoW += 'px';
				videoH += 'px';
			} else {
				videoW = containerW;
				videoH = containerW * (ratio2 / ratio1);
				videoW += 'px';
				videoH += 'px';
			}
			if( $element.hasClass('grve-yt-bg-video') || $element.hasClass('grve-iframe-bg-video') ) {
				videoEl = 'iframe';
			} else {
				videoEl = 'video';
			}

			$element.find( videoEl ).css({
				maxWidth: '1000%',
				width: videoEl == 'iframe' ? videoW : '',
				height: videoH
			});
		},
		removeVideoBg: function(){
			$('.grve-background-wrapper').each(function () {
				var $wrapper = $(this),
					$bgImage = $wrapper.find('.grve-bg-image'),
					$bgVideo = $wrapper.find('.grve-bg-video'),
					$bgHtml5Video = $wrapper.find('.grve-html5-bg-video'),
					$bgYtVideo = $wrapper.find('.grve-yt-bg-video'),
					$bgIFrameVideo = $wrapper.find('.grve-iframe-bg-video'),
					$bgVideoButton = $wrapper.find('.grve-bg-video-button-device');

				var bgVideoDevice = $bgVideo.data('videoDevice') != undefined ? $bgVideo.data('videoDevice') : 'no';
				if( isMobile.any() && 'no' === bgVideoDevice) {
					$bgVideo.remove();
				} else {

					if ( $bgHtml5Video.length ) {
						var $videoElement = $wrapper.find('.grve-bg-video video');
						var canPlayVideo = false;
						$wrapper.find('.grve-bg-video source').each(function(){
							if ( $videoElement.get(0).canPlayType( $(this).attr('type') ) ) {
								canPlayVideo = true;
							}
						});
						if(canPlayVideo) {
							$bgImage.remove();
						} else {
							$bgVideo.remove();
						}
					}
					if ( $bgYtVideo.length || $bgIFrameVideo.length ) {
						$bgImage.remove();
					}
					if ( $bgVideoButton.length ) {
						$bgVideoButton.remove();
					}
				}
			});

		},
		safeButtonAnimation: function(){

			var boxes = [].slice.call(document.querySelectorAll('.grve-safe-btn-icon'));
			boxes.forEach(function(box){
				var box = Snap(box),
					point1 = box.select('.grve-btn-point-1'),
					point2 = box.select('.grve-btn-point-2'),
					point3 = box.select('.grve-btn-point-3'),
					point4 = box.select('.grve-btn-point-4'),
					point5 = box.select('.grve-btn-point-5'),
					point6 = box.select('.grve-btn-point-6'),
					point7 = box.select('.grve-btn-point-7'),
					point8 = box.select('.grve-btn-point-8'),
					point9 = box.select('.grve-btn-point-9');

				function dotToCross(){
					point1.animate({
						x: 29,
						y: 16,
						width: 6,
						height: 14
					}, 100),
					point2.animate({
						x: 29,
						y: 4,
						width: 6,
						height: 12
					}, 100),
					point3.animate({
						x: 34,
						y: 29,
						width: 14,
						height: 6
					}, 100),
					 point4.animate({
						x: 4,
						y: 29,
						width: 12,
						height: 6
					}, 100),
					point5.animate({
						x: 29,
						y: 29,
						width: 6,
						height: 6
					}, 100),
					point6.animate({
						x: 48,
						y: 29,
						width: 12,
						height: 6
					}, 100),
					point7.animate({
						x: 16,
						y: 29,
						width: 14,
						height: 6
					}, 100),
					point8.animate({
						x: 29,
						y: 48,
						width: 6,
						height: 12
					}, 100),
					point9.animate({
						x: 29,
						y: 34,
						width: 6,
						height: 14
					}, 100);
				}
				function crossToDot(){
					point1.animate({
						x: 12,
						y: 12,
						width: 8,
						height: 8
					}, 200),
					point2.animate({
						x: 28,
						y: 12,
						width: 8,
						height: 8
					}, 200),
					point3.animate({
						x: 44,
						y: 12,
						width: 8,
						height: 8
					}, 200),
					point4.animate({
						x: 12,
						y: 28,
						width: 8,
						height: 8
					}, 200),
					point5.animate({
						x: 28,
						y: 28,
						width: 8,
						height: 8
					}, 200),
					point6.animate({
						x: 44,
						y: 28,
						width: 8,
						height: 8
					}, 200),
					point7.animate({
						x: 12,
						y: 44,
						width: 8,
						height: 8
					}, 200),
					point8.animate({
						x: 28,
						y: 44,
						width: 8,
						height: 8
					}, 200),
					point9.animate({
						x: 44,
						y: 44,
						width: 8,
						height: 8
					}, 200);
				}

				$('.grve-safe-button').on('mouseenter', function() {
					dotToCross();
				});

				$('.grve-safe-button').on('mouseleave', function() {
					crossToDot();
				});
			});

		},
		linkGoToTop: function( element, delay, space ){

			var $this = element,
				elementTop       = $this.offset().top,
				header           = $('#grve-header').length && $('#grve-main-header').is(":visible") ? true : false,
				responsiveHeader = $('#grve-responsive-header').length && $('#grve-responsive-header').is(":visible") ? true : false,
				headerHeight     = header && $('#grve-header').data('sticky') != 'none' ? $('#grve-main-header').outerHeight() : 0,
				movedoStickyH    = $('#grve-header').data('sticky') == 'movedo' && $('#grve-header').hasClass('grve-sticky-header') ? $('#grve-header').data('sticky-height') : 0,
				respHeaderH      = responsiveHeader && $('#grve-header').data('devices-sticky') == 'yes' ? $('#grve-responsive-header').outerHeight() : 0,
				topBarHeight     = $('#grve-top-bar').length ? $('#grve-top-bar').height() : 0,
				anchorBarHeight  = $('.grve-anchor-menu').length ? $('.grve-anchor-menu').outerHeight() : 0,
				delayAnim        = delay != undefined ? delay : 300,
				topSpace         = space != undefined ? space : 0,
				offset           = topBarHeight + wpBarHeight + headerHeight + movedoStickyH + respHeaderH + anchorBarHeight + topSpace;

			if( elementTop > 0 ){
				$('html, body').delay(delayAnim).animate({
					scrollTop: elementTop - offset
				}, 900, 'easeInOutCubic');
				$("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
					$('html, body').stop();
				});
				return false;
			}
		},
		mainMenu: function(){
			var $mainMenu = $('#grve-header .grve-horizontal-menu ul.grve-menu');

			$('.grve-main-menu').find( 'a[href="#"]').on('click',function(e){
				e.preventDefault();
			});

			$mainMenu.superfish({
				popUpSelector: '.sub-menu',
				delay: 300,
				speed: 'fast',
				cssArrows: false,
				onBeforeShow: function(){
					var $subMenu = $(this);
					if( !$subMenu.length ) return;
					var $li = $subMenu.parent(),
						windowW = $(window).width(),
						subMenuW = $subMenu.width(),
						liOffsetL = $li.offset().left;
					if( $li.hasClass('megamenu') && $li.css('position') == 'relative' ){
						if(subMenuW + liOffsetL > windowW) {
							var left = windowW - (subMenuW + liOffsetL);
							$subMenu.css({'left' : left});
						}
					}
					if( $('#grve-header .grve-first-level').length > 0 ){
						if( !$li.hasClass('grve-first-level') && !$li.hasClass('megamenu') ){
							var subMenuLength = $li.find('.sub-menu').length + 1,
								subMenuOffsetL = $li.parents('.grve-first-level').offset().left;
							if( (subMenuW * subMenuLength) + subMenuOffsetL > windowW) {
								$li.addClass('grve-invert');
							}
						}
					}
					if( $('body').hasClass('grve-boxed') && ( $li.hasClass('megamenu column-3') || $li.hasClass('megamenu column-2') ) ){
						var containerW = $('#grve-theme-wrapper').width(),
							containerL = $('#grve-theme-wrapper').offset().left,
							positionL = 0;

						if( subMenuW + liOffsetL > containerW + containerL ){
							positionL = (containerW + containerL) - (subMenuW + liOffsetL);
						}

						$subMenu.css({
							'left' : positionL
						});
					}
				},
				onHide: function(){
					var $subMenu = $(this),
						$li = $subMenu.parent();
					$li.removeClass('grve-invert');
				}
			});
		},
		columnFullHeight: function(){
			var $column = $('.grve-column-fullheight');

			$column.each(function(){
				var $that = $(this),
					fullTabletL = $that.data('tablet-landscape-fullheight') != undefined ? false : true,
					fullTabletP = $that.data('tablet-portrait-fullheight') != undefined ? false : true,
					fullMobileL = $that.data('mobile-fullheight') != undefined ? false : true;

				$that.columnSize({
					equal: false,
					middleContent: false,
					fullHeight: true,
					fullTabletL : fullTabletL,
					fullTabletP : fullTabletP,
					fullMobileL : fullMobileL
				});
			});
		},
		columnCustomSize: function(){
			var $section = $('.grve-section.grve-custom-height');
			$section.each(function(){
				var $that = $(this),
					equal = false,
					middle = false,
					fullHeight = false,
					equalTabletL = true,
					equalTabletP = true,
					equalMobileL = true,
					fullTabletL = true,
					fullTabletP = true,
					fullMobileL = true;

				if( $that.hasClass('grve-equal-column') || $that.hasClass('grve-middle-content') ){
					equal = true;
					equalTabletL = $that.data('tablet-landscape-equal-columns') != undefined ? false : true;
					equalTabletP = $that.data('tablet-portrait-equal-columns') != undefined ? false : true;
					equalMobileL = $that.data('mobile-equal-columns') != undefined ? false : true;
				}
				if( $that.hasClass('grve-middle-content') ){
					middle = true;
				}
				if( $that.hasClass('grve-fullheight') ){
					fullHeight = true;
					fullTabletL = $that.data('tablet-landscape-fullheight') != undefined ? false : true;
					fullTabletP = $that.data('tablet-portrait-fullheight') != undefined ? false : true;
					fullMobileL = $that.data('mobile-fullheight') != undefined ? false : true;
				}
				$that.columnSize({
					equal : equal,
					middleContent : middle,
					fullHeight : fullHeight,
					equalTabletL : equalTabletL,
					equalTabletP : equalTabletP,
					equalMobileL : equalMobileL,
					fullTabletL : fullTabletL,
					fullTabletP : fullTabletP,
					fullMobileL : fullMobileL
				});
			});
		},
		columnEffect: function(){
			var $parallaxColumn = $('.grve-parallax-effect'),
				$section = $parallaxColumn.parents('.grve-section');

			$parallaxColumn.each(function(){
				var $that = $(this),
					parallaxEffect = $that.data('parallax-effect'),
					tabletL = $that.data('tablet-landscape-parallax-effect') != 'none' && parallaxEffect == 'vertical-parallax' ? true : false,
					tabletP = $that.data('tablet-portrait-parallax-effect') != 'none' && parallaxEffect == 'vertical-parallax' ? true : false,
					mobileL = $that.data('mobile-parallax-effect') != 'none' && parallaxEffect == 'vertical-parallax' ? true : false,
					$section = $that.parents('.grve-section');

				imagesLoaded( $section, function() {
					$that.paraller({
						tabletL : [tabletLandscape, tabletL],
						tabletP : [tabletPortrait, tabletP],
						mobileL : [mobileScreen, mobileL]
					});
				});
			});
		},
		grveModal: function(){

			var $button       = $('.grve-toggle-modal'),
				$overlay      = $('<div id="grve-modal-overlay" class="grve-body-overlay"></div>'),
				$closeBtn     = $('<div class="grve-close-modal"><i class="grve-icon-close"></i></div>'),
				$themeWrapper = $('#grve-theme-wrapper'),
				content;

			$button.on('click',function(e){
				content = $(this).attr('href');
				if( content.indexOf("#") === 0 && $(content).length > 0 ) {
					e.preventDefault();

					// Append Overlay on body
					$overlay.appendTo( $themeWrapper );
					// $closeBtn.appendTo( $(content) );

					$(content).addClass('prepare-anim');

					openModal();

					$closeBtn.on('click',function(e){
						e.preventDefault();
						closeModal();
					});

					$(content).on('click',function(e){
						if ( !$('.grve-modal-item').is(e.target) && $('.grve-modal-item').has(e.target).length === 0 ) {
							e.preventDefault();
							closeModal();
						}
					});
				}
			});

			// Search Modal
			var $searchContent = $('#grve-search-modal'),
				$placeholder = $('.grve-search-placeholder'),
				$typedEl = $searchContent.find('.grve-search-placeholder'),
				$searchButton = $searchContent.find('.grve-search-btn'),
				$searchTextField = $searchContent.find('.grve-search-textfield'),
				typedContent = $typedEl.html(),
				typedText = false;

			// Clear Typed Html
			if ( $placeholder.hasClass('grve-typed-placeholder') ) {
				$typedEl.html('');
			}

			$placeholder.on('click',function(){
				$typedEl.addClass('hide');
				$searchTextField.show().focus();
			});

			// Open Modal
			function openModal() {
				$overlay.fadeIn(function(){
					$(content).addClass('animate');

					// Search Typed Title
					if( $(content).is('#grve-search-modal') ){
						$searchTextField.val('');
						if( $placeholder.hasClass('grve-typed-placeholder') ){
							typedTitle();
						} else {
							staticTitle();
						}
					}
				});
			}

			// Close Modal
			function closeModal() {
				$(content).removeClass('animate mobile');
				setTimeout(function(){
					$overlay.fadeOut(function(){
						$(content).removeClass('prepare-anim');
						$overlay.remove();
						$closeBtn.remove();

						// Search Modal Remove Classes
						if( $(content).is('#grve-search-modal') ){
							if ( $placeholder.hasClass('grve-typed-placeholder') ) {
								$typedEl.removeClass('hide').html('');
								$searchTextField.hide();
								$searchButton.removeClass('show');
								typedText = false;
							} else {
								$typedEl.removeClass('hide');
								$searchTextField.hide();
							}
						}
					});
				},600);
			}

			function typedTitle(){

				if(!typedText){
					typedText = true;
					$typedEl.data('typed', null).typed({
						strings: [typedContent],
						showCursor: false,
						typeSpeed: 60,
						callback: function() {
							$searchButton.addClass('show');
						}
					});
				}
			}
			function staticTitle(){
				$typedEl.addClass('show');
				$searchButton.addClass('show');
			}

			$(document).on('keyup',function(evt) {
				if (evt.keyCode == 27 && $(content).hasClass('animate') ) {
					closeModal();
				}
			});

		},
		gotoFirstSection: function(){
			var $selector    = $('#grve-feature-section #grve-goto-section'),
				$nextSection = $('#grve-content'),
				$stickyHeader = $('#grve-header').data('sticky') != 'none' ? $('#grve-header').data('sticky-height') : 0;

			$selector.on('click',function(){
				if( $nextSection.length ){
					$('html,body').animate({
						scrollTop: $nextSection.offset().top - $stickyHeader
					}, 1000);
					return false;
				}
			});
		},
		bgLoader: function() {

			var $selector = $('#grve-header .grve-bg-image, #grve-content .grve-bg-image, #grve-footer .grve-bg-image, .grve-navigation-bar .grve-bg-image, #grve-sidearea .grve-bg-image, #grve-safebutton-area .grve-bg-image');
			$selector.each(function () {
				var $selector = $(this);
				if( $selector.data('loader') == 'yes' ){
					GRVE.pageSettings.addSpinner( $selector );
				}
				function imageUrl(input) {
					return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
				}
				var image = new Image(),
					$that = $(this);
				image.src = imageUrl($that.css('background-image'));
				image.onload = function () {
					if( $selector.data('loader') == 'yes' ){
						GRVE.pageSettings.removeSpinner( $selector );
					} else {
						$that.addClass('show');
					}
				};
			});
		},
		imageLoader: function(){
			var selectors  = {
				singleImage  : '.grve-image',
				media        : '.grve-media'
			};
			$.each(selectors, function(key, value){
				if( $(this).length ){
					var item     = $(this),
						imgLoad  = imagesLoaded( item );
					imgLoad.on( 'always', function() {
						$(value).find('img').animate({ 'opacity': 1 },1000);
					});
				}
			});
		},
		addSpinner: function( $selector ){
			var $section = $selector;
			$(spinner).appendTo( $section.parent() );
		},
		removeSpinner: function( $selector ){

			var $section   = $selector.parent(),
				$spinner   = $section.find('.grve-spinner');

			$spinner.fadeOut(600,function(){
				$selector.addClass('show');
				$spinner.remove();
			});
		},
		fitVid: function(){
			$('.grve-video, .grve-media').fitVids();
			$('iframe[src*="youtube"]').parent(":not(.grve-bg-youtube-video)").fitVids();
			$('iframe[src*="vimeo"]').parent().fitVids();
		},
		hiddenArea: function(){
			var $btn          = $('.grve-toggle-hiddenarea'),
				$themeWrapper = $('#grve-theme-wrapper'),
				$closeBtn     = $('.grve-hidden-area').find('.grve-close-btn'),
				startTimer = false,
				itemLength = 0,
				areaWidth = 0,
				content,
				$overlay;

			$btn.on('click',function(e){
				content = $(this).attr('href');
				if( content.indexOf("#") === 0 && $(content).length > 0 ) {
					e.preventDefault();

					$(content).each(function(){
						var $content = $(this);
						var overlayId = $content.attr('id');

						$content.addClass('prepare-anim');
						$overlay = $('<div id="' + overlayId + '-overlay" class="grve-body-overlay"></div>');

						// Append Overlay on body
						$overlay.appendTo( $themeWrapper );

						// Calculate Width
						areaWidth = hiddenAreaWidth( $content );
						$(window).smartresize(function(){
							areaWidth = hiddenAreaWidth( $content );
						});

						// Menu First Level Animation
						if(hiddenMenuItemsAnimation){
							$content.addClass('grve-animated-menu-items');
						}
						setTimeout(function(){
							if(hiddenMenuItemsAnimation){
								animMenuItems( $content );
							}
						},1000);

						if( $content.hasClass('open') ) {
							closeHiddenArea();
						} else {
							openHiddenArea();
						}

						// For One Page
						var $link = $content.find('a[href*="#"]:not( [href="#"] )');
						$link.on('click',function(){
							var target = $(this.hash),
								targetHash = this.hash,
								dataValue = this.hash.replace('#','');
							if ( target.length && ( target.hasClass('grve-section') || target.hasClass('grve-bookmark') || target.hasClass('grve-tab-content') || target.hasClass('grve-accordion-content') ) ) {
								closeHiddenArea();
							}
							// For Fullpage Scrolling
							if( $('[data-anchor="' + dataValue + '"]').length ){
								closeHiddenArea();
							}
							//For go to header
							if( 'grve-goto-header' == dataValue ){
								closeHiddenArea();
							}
						});

					});
				}
			});

			$closeBtn.on('click',function(){
				closeHiddenArea();
			});

			// Open Hidden Area
			function openHiddenArea() {
				$overlay.fadeIn(function(){
					$(window).trigger('grve_open_hidden_area');
					$('.grve-hiddenarea-wrapper').scrollTop( 0 );
					$(content).addClass('open');
					$(this).on('click',function(){
						closeHiddenArea();
					});
				});
			}
			// Close Hidden Area
			function closeHiddenArea() {
				$themeWrapper.css({ 'height' : 'auto' });
				$(content).removeClass('open');
				$overlay.fadeOut(function(){
					$overlay.remove();
					$(content).removeClass('prepare-anim');
					$(window).trigger('grve_close_hidden_area');
				});
			}
			// Calculate Area Width
			function hiddenAreaWidth( $area ){
				var windowWidth  = $(window).width();

				if( $(window).width() + scrollBarWidth <= mobileScreen ) {
					$area.css({ 'width' : windowWidth + 30 });
				} else {
					if( $area.hasClass('grve-large-width') ) {
						$area.css({ 'width' : Math.max(hiddenaAreaMinWidth, (windowWidth / 2)) });
					} else if( $area.hasClass('grve-medium-width') ) {
						$area.css({ 'width' : Math.max(hiddenaAreaMinWidth, (windowWidth / 3)) });
					} else {
						$area.css({ 'width' : Math.max(hiddenaAreaMinWidth, (windowWidth / 4)) });
					}
				}

				return areaWidth;
			}

			// Menu First Level Animation
			function animMenuItems( $area ) {
				var $menu = $area.find('ul.grve-menu'),
					$firstLevel = $menu.find('li.grve-first-level'),
					itemLength = $firstLevel.length,
					count = -1,
					counter;

				if( itemLength > 0 && !startTimer ){
					startTimer = true;
					counter = setInterval(function(){
						timer($firstLevel);
					}, 200);
				}

				function timer($menuItem){
					count += 1;
					if (count >= itemLength) {
						clearInterval(counter);
						startTimer = false;
					}
					$menuItem.eq(count).addClass('show');
				}
			}

		},
		backtoTop: function() {
			var selectors  = {
				topBtn     : '.grve-back-top',
				dividerBtn : '.grve-divider-backtotop',
				topLink    : 'a[href="#grve-goto-header"]'
				},
				footerBarHeight = $('.grve-footer-bar.grve-fullwidth').length ? $('.grve-footer-bar.grve-fullwidth').outerHeight() : 0;

				if( $( selectors.topBtn ).length ) {

					$(window).on('scroll', function() {
						var scroll = $(this).scrollTop(),
							$topBtn = $( selectors.topBtn );

						if (scroll > 600) {
							$topBtn.addClass('show');
						} else {
							$topBtn.removeClass('show');
						}
						if( scroll + $(window).height() > $(document).height() - footerBarHeight ) {
							$topBtn.css({ 'transform': 'translate(0, ' + -( footerBarHeight + 80 ) + 'px)' });
						} else {
							$topBtn.css({ 'transform': '' });
						}

					});
				}

			$.each(selectors, function(key, value){
				$(value).on('click', function(e){
					e.preventDefault();
					if( $('#grve-header').data('sticky') === 'movedo' ){
						goToTop = true;
						$('#grve-header').removeClass('grve-fixed grve-sticky-header grve-sticky-animate grve-scroll-up grve-scroll-down').css({'top':''});
						$('#grve-main-header').css({'top':''});
					}
					var scrollTop = Math.abs($(window).scrollTop()) / 2,
						speed = scrollTop < 1000 ? 1000 : scrollTop;
					$('html, body').animate({scrollTop: 0}, speed, 'easeInOutCubic',function(){
						goToTop = false;
					});
				});
			});

		},
		animatedBg: function(){
			var $section = $('.grve-section');

			$section.each(function(){
				var $this = $(this);

				if( $this.hasClass('grve-bg-animated') ) {
					zoomBg( $this );
				} else if( $this.hasClass('grve-bg-horizontal') ) {
					horizontalBg( $this );
				}
			});

			function zoomBg( $this ){
				$this.mouseenter(function() {
					$this.addClass('zoom');
				});
				$this.mouseleave(function() {
					$this.removeClass('zoom');
				});
			}

			function horizontalBg( $this ){
				var bgPosition = 0;
				setInterval(function(){
					bgPosition++;
					$this.find('.grve-bg-image').css({ 'background-position' : bgPosition+'px center', 'background-repeat' : 'repeat' });
				},75);
			}
		},
		onePageSettings: function(){
			$('a[href*="#"]:not( [href="#"] )').on('click', function(e) {
				var anchorBarHeight = $('.grve-anchor-menu').length ? $('.grve-anchor-menu').outerHeight() : 0,
					topbarH         = $('#grve-top-bar').length && ( $('#grve-top-bar').hasClass('grve-sticky-topbar') || $('#grve-top-bar').hasClass('grve-device-sticky-topbar') ) ? $('#grve-top-bar').outerHeight() : 0,
					target          = $(this.hash),
					targetHash      = this.hash;

				if( $("#grve-responsive-header").is(":visible") ) {
					var headerHeight = $('#grve-header').length && $('#grve-header').data('devices-sticky') != 'no' ? $('#grve-header').data('devices-sticky-height') : 0;
				} else {
					var headerHeight = $('#grve-header').length && $('#grve-header').data('sticky') != 'none' ? $('#grve-header').data('sticky-height') : 0;
					if( target.length ){
						headerHeight = ( 'advanced' == $('#grve-header').data('sticky') && target.offset().top > $(this).offset().top ) ? 0 : headerHeight;
					}
				}

				if ( target.length && ( target.hasClass('grve-section') || target.hasClass('grve-bookmark') ) ) {
					$('html,body').animate({
						scrollTop: target.offset().top - headerHeight - wpBarHeight - anchorBarHeight - topbarH + 1
					}, 1000);
					return false;
				}

				if ( target.length && ( target.hasClass('grve-tab-content') || target.hasClass('grve-accordion-content') ) ) {
					var tabLink =  $('.grve-tab-link[data-rel="' + targetHash + '"]:visible');
					if ( tabLink.length ) {
						tabLink.click();
						setTimeout(function() {
							GRVE.pageSettings.linkGoToTop( tabLink );
						}, 500);
					}
					return false;
				}
			});
		},
		onePageMenu: function(){
			var $section       = $('#grve-main-content .grve-section[id]');
			if (!$section.length > 0 ) return;

			var headerHeight   = $('#grve-header').length && $('#grve-header').attr('data-sticky-header') != 'none' && !$('#grve-main-header').hasClass('grve-header-side') ? $('#grve-main-header').outerHeight() : 0,
				anchorBarHeight = $('.grve-anchor-menu').length ? $('.grve-anchor-menu').outerHeight() : 0,
				offsetTop      = headerHeight + anchorBarHeight + wpBarHeight,
				scroll         = $(window).scrollTop();

			$section.each(function(){
				var $that         = $(this),
					currentId     = $that.attr('id'),
					sectionOffset = $that.offset().top - offsetTop;

				if (sectionOffset <= scroll && sectionOffset + $that.outerHeight() > scroll ) {
					$('a[href*="#' + currentId + '"]').parent().addClass('active');
				}
				else{
					$('a[href*="#' + currentId + '"]').parent().removeClass("active");
				}

			});
		},
		fixedFooter: function(){
			var $footer      = $('#grve-footer'),
				sticky       = $footer.data('sticky-footer'),
				prevSection  = $footer.prev(),
				prevMargin = parseInt( prevSection.css('margin-bottom') ),
				delay;

			if( !$footer.length || sticky != 'yes' || isMobile.any() ) return;

			// On window events
			$( window ).on( 'scroll', function(){
				update();
			});
			$(window).on('resize',resizer);

			function resizer(){
				window.clearTimeout(delay);
				delay = window.setTimeout(function() {
					$footer.prev().css( 'margin-bottom','' );
					prevMargin = parseInt( prevSection.css('margin-bottom') );
					update();
				}, 900);
			}

			update();

			function update(){
				var windowWidth = $(window).width(),
					windowHeight = $(window).height(),
					footerHeight = $footer.outerHeight(),
					margin       = footerHeight + prevMargin;

				if( ( windowWidth + scrollBarWidth <= tabletLandscape ) || ( footerHeight > windowHeight ) ) {
					$footer.removeClass('grve-fixed-footer').prev().css( 'margin-bottom','' );
				} else {
					$footer.addClass('grve-fixed-footer').prev().css( 'margin-bottom',margin );
				}
			}

		},
		productImageParallax: function(){
			$('#grve-product-feature-image .grve-product-parallax-image img').paraller({
				wrapper : '.grve-product-area-wrapper',
				effect : 'mouse-move-x',
				sensitive : 'normal',
				invert : true
			});
		},
		lightBox: function(){
			//IMAGE
			$('.grve-image-popup').each(function() {
				$(this).magnificPopup({
					type: 'image',
					preloader: false,
					fixedBgPos: true,
					fixedContentPos: true,
					removalDelay: 200,
					closeMarkup: '<div class="mfp-close grve-close-modal"></div>',
					closeOnBgClick: true,
					callbacks: {
						beforeOpen: function() {
							var mfpWrap = this.wrap;
							this.bgOverlay.fadeIn(200);
							addSpinner( mfpWrap );
						},
						imageLoadComplete: function() {
							var $spinner = this.wrap.find('.grve-spinner'),
								$content = this.container;
							removeSpinner( $spinner, $content );

						},
						beforeClose: function() {
							this.wrap.fadeOut(100);
							this.container.css({'opacity' : 0});
							this.bgOverlay.fadeOut(100);
						},
					},
					image: {
						verticalFit: true,
						titleSrc: function(item) {
							var title   = item.el.data( 'title' ) ? item.el.data( 'title' ) : '',
								caption = item.el.data('desc') ? '<br><small>' + item.el.data('desc') + '</small>' : '';
							if ( '' === title ) {
								title   = item.el.find('.grve-title').html() ? item.el.find('.grve-title').html() : '';
							}
							if ( '' === caption ) {
								caption = item.el.find('.grve-caption').html() ? '<br><small>' + item.el.find('.grve-caption').html() + '</small>' : '';
							}
							return title + caption;
						}
					}
				});

			});
			$('.grve-gallery-popup, .grve-post-gallery-popup').each(function() {
				var $that = $(this);

				$(this).magnificPopup({
					delegate: 'a',
					type: 'image',
					preloader: false,
					fixedBgPos: true,
					fixedContentPos: true,
					removalDelay: 200,
					closeMarkup: '<div class="mfp-close grve-close-modal"></div>',
					closeOnBgClick: true,
					callbacks: {
						beforeOpen: function() {
							var mfpWrap = this.wrap;
							this.bgOverlay.fadeIn(200);
							addSpinner( mfpWrap );
						},
						imageLoadComplete: function() {
							var $spinner = this.wrap.find('.grve-spinner'),
								$content = this.container;
							removeSpinner( $spinner, $content );

						},
						beforeClose: function() {
							this.wrap.fadeOut(100);
							this.container.css({'opacity' : 0});
							this.bgOverlay.fadeOut(100);
						},
						markupParse: function(template, values, item) {
							var title   = item.el.data( 'title' ) ? item.el.data( 'title' ) : '',
								social = $that.data('social') ? 'yes' : '';

							if ( '' != social ) {
								social = '<div class="grve-element grve-social grve-align-right">';
								social += '<ul>';
								if ( $that.data('social-email') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-email" href="mailto:?body=' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-envelope"></i></a></li>';
								}
								if ( $that.data('social-facebook') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-facebook" href="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-facebook"></i></a></li>';
								}
								if ( $that.data('social-twitter') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-twitter" href="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-twitter"></i></a></li>';
								}
								if ( $that.data('social-linkedin') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-linkedin" href="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-linkedin"></i></a></li>';
								}
								if ( $that.data('social-googleplus') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-googleplus" href="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-google-plus"></i></a></li>';
								}
								if ( $that.data('social-reddit') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-reddit" href="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-reddit"></i></a></li>';
								}
								if ( $that.data('social-pinterest') ) {
								social += '<li><a class="grve-social-share-pinterest" href="' + item.el.attr('href') + '" data-pin-img="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-pinterest"></i></a></li>';
								}
								if ( $that.data('social-tumblr') ) {
								social += '<li><a class="grve-extra-small grve-no-shape grve-social-share-tumblr" href="' + item.el.attr('href') + '" title="' + title + '"><i class="fa fa-tumblr"></i></a></li>';
								}
								social += '</ul>';
								social += '</div>';

								template.find('.grve-mfp-social').html( social );
								setTimeout(function() {
									GRVE.pageSettings.socialShareLinks();
								}, 1000 );
							}
						}
					},
					gallery: {
						enabled:true,
						tCounter: '%curr% / %total%'
					},
					image: {
						markup: '<div class="mfp-figure">'+
							'<div class="mfp-close grve-close-modal"></div>'+
							'<div class="mfp-img"></div>'+
							'<div class="mfp-bottom-bar">'+
							  '<div class="mfp-title"></div>'+
							  '<div class="mfp-counter"></div>'+
							  '<div class="grve-mfp-social"></div>'+
							'</div>'+
						  '</div>',
						tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
						titleSrc: function(item) {
							var title   = item.el.data( 'title' ) ? item.el.data( 'title' ) : '',
								caption = item.el.data('desc') ? '<br><small>' + item.el.data('desc') + '</small>' : '';
							if ( '' === title ) {
								title   = item.el.find('.grve-title').html() ? item.el.find('.grve-title').html() : '';
							}
							if ( '' === caption ) {
								caption = item.el.find('.grve-caption').html() ? '<br><small>' + item.el.find('.grve-caption').html() + '</small>' : '';
							}
							return title + caption;
						}
					}
				});
			});

			if( 1 == movedo_grve_main_data.wp_gallery_popup ) {
				$('.gallery').each(function() {
					$(this).magnificPopup({
						delegate: 'a',
						type: 'image',
						preloader: false,
						fixedBgPos: true,
						fixedContentPos: true,
						removalDelay: 200,
						closeMarkup: '<div class="mfp-close grve-close-modal"></div>',
						closeOnBgClick: true,
						callbacks: {
							beforeOpen: function() {
								var mfpWrap = this.wrap;
								this.bgOverlay.fadeIn(200);
								addSpinner( mfpWrap );
							},
							imageLoadComplete: function() {
								var $spinner = this.wrap.find('.grve-spinner'),
									$content = this.container;
								removeSpinner( $spinner, $content );

							},
							beforeClose: function() {
								this.wrap.fadeOut(100);
								this.container.css({'opacity' : 0});
								this.bgOverlay.fadeOut(100);
							},
						},
						gallery: {
							enabled:true,
							tCounter: '%curr% / %total%'
						},
						image: {
							tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
							titleSrc: function(item) {
								var title   = item.el.closest('.gallery-item').find('.gallery-caption').html() ? item.el.closest('.gallery-item').find('.gallery-caption').html() : '';
								return title;
							}
						}
					});
				});
			}
			//Inline Modal Popup
			$('.grve-modal-popup').each(function() {
				$(this).magnificPopup({
					disableOn: 0,
					type: 'inline',
					preloader: false,
					prependTo: '#grve-theme-wrapper',
					fixedBgPos: true,
					fixedContentPos: true,
					removalDelay: 200,
					closeMarkup: '<div class="mfp-close grve-close-modal"></div>',
					closeOnBgClick: true,
					callbacks: {
						beforeOpen: function() {
							var mfpWrap = this.wrap;
							this.bgOverlay.fadeIn(200);
							addSpinner( mfpWrap );
						},
						open: function() {
							var $spinner = this.wrap.find('.grve-spinner'),
								$content = this.container;
							removeSpinner( $spinner, $content );

							if( $content.find('.grve-isotope').length ) {
								$('.grve-modal-popup').trigger( "grve_relayout_isotope" );
							}
							if( $content.find('.owl-carousel').length ) {
								setTimeout(function(){
									$content.find('.owl-carousel').each(function(){
										var owl = $(this).data('owlCarousel');
										owl.onResize();
									});
								},300);
							}
							if( $content.find('.grve-map').length ) {
								$('.grve-map').trigger( "grve_redraw_map" );
							}
							if( $content.find('.rev_slider').length ) {
								$('.rev_slider').revredraw();
							}
						},
						beforeClose: function() {
							this.wrap.fadeOut(100);
							this.container.css({'opacity' : 0});
							this.bgOverlay.fadeOut(100);
						},
					}
				});
			});
			//VIDEOS
			if ( $('#grve-body').hasClass( 'grve-privacy-video-embeds-disabled' ) ) {
				$('.grve-youtube-popup, .grve-vimeo-popup, .grve-video-popup').each(function() {
					$(this).attr({"target" : "_blank"});
				});
			} else {
				$('.grve-youtube-popup, .grve-vimeo-popup, .grve-video-popup').each(function() {
					$(this).magnificPopup({
						disableOn: 0,
						type: 'iframe',
						preloader: false,
						fixedBgPos: true,
						fixedContentPos: true,
						removalDelay: 200,
						closeMarkup: '<div class="mfp-close grve-close-modal"></div>',
						closeOnBgClick: true,
						callbacks: {
							beforeOpen: function() {
								var mfpWrap = this.wrap;
								this.bgOverlay.fadeIn(200);
								addSpinner( mfpWrap );
							},
							open: function() {
								var $spinner = this.wrap.find('.grve-spinner'),
									$content = this.container;
								removeSpinner( $spinner, $content );
							},
							beforeClose: function() {
								this.wrap.fadeOut(100);
								this.container.css({'opacity' : 0});
								this.bgOverlay.fadeOut(100);
							},
						}
					});
				});
			}
			//PAGE POPUP
			$('.grve-page-popup').each(function() {
				$(this).magnificPopup({
					disableOn: 0,
					type: 'iframe',
					preloader: false,
					fixedBgPos: true,
					fixedContentPos: true,
					removalDelay: 200,
					closeMarkup: '<div class="mfp-close grve-close-modal"></div>',
					closeOnBgClick: true,
					callbacks: {
						beforeOpen: function() {
							var mfpWrap = this.wrap;
							this.bgOverlay.fadeIn(200);
							addSpinner( mfpWrap );
						},
						open: function() {
							var $spinner = this.wrap.find('.grve-spinner'),
								$content = this.container;
							removeSpinner( $spinner, $content );
						},
						beforeClose: function() {
							this.wrap.fadeOut(100);
							this.container.css({'opacity' : 0});
							this.bgOverlay.fadeOut(100);
						},
					}
				});
			});

			function addSpinner( mfpWrap ){
				$(spinner).appendTo( mfpWrap );
			}

			function removeSpinner( spinner, content ){
				setTimeout(function(){
					spinner.fadeOut(1000, function(){
						content.animate({'opacity':1},600);
						$('.grve-modal-popup').trigger( 'grve_open_modal' );
						$(spinner).remove();
					});
				}, 700);
			}
		},
		socialShareLinks: function(){
			$('.grve-social-share-facebook').on('click', function(e) {
				e.preventDefault();
				window.open( 'https://www.facebook.com/sharer/sharer.php?u=' + $(this).attr('href'), "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});
			$('.grve-social-share-twitter').on('click', function(e) {
				e.preventDefault();
				window.open( 'http://twitter.com/intent/tweet?text=' + encodeURIComponent( $(this).attr('title') ) + ' ' + $(this).attr('href'), "twitterWindow", "height=450,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});
			$('.grve-social-share-linkedin').on('click', function(e) {
				e.preventDefault();
				window.open( 'http://www.linkedin.com/shareArticle?mini=true&url=' + $(this).attr('href') + '&title=' + encodeURIComponent( $(this).attr('title') ), "linkedinWindow", "height=500,width=820,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});
			$('.grve-social-share-googleplus').on('click', function(e) {
				e.preventDefault();
				window.open( 'https://plus.google.com/share?url=' + $(this).attr('href'), "googleplusWindow", "height=600,width=600,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});
			$('.grve-social-share-pinterest').on('click', function(e) {
				e.preventDefault();
				window.open( 'http://pinterest.com/pin/create/button/?url=' + $(this).attr('href') + '&media=' + $(this).data('pin-img') + '&description=' + encodeURIComponent( $(this).attr('title') ), "pinterestWindow", "height=600,width=600,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});
			$('.grve-social-share-reddit').on('click', function(e) {
				e.preventDefault();
				window.open( '//www.reddit.com/submit?url=' + $(this).attr('href'), "redditWindow", "height=600,width=820,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=1" );
				return false;
			});
			$('.grve-social-share-tumblr').on('click', function(e) {
				e.preventDefault();
				window.open( '//www.tumblr.com/share/link?url=' + $(this).attr('href') + '&name=' + encodeURIComponent( $(this).attr('title') ) , "tumblrWindow", "height=600,width=600,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
				return false;
			});
			$('.grve-like-counter-link').on('click', function(e) {
				e.preventDefault();
				var link = $(this);
				var id = link.data('post-id'),
					counter = link.parent().find('.grve-like-counter'),
					icon = link.find('i');

				var dataParams = {
					action:'movedo_grve_likes_callback',
					grve_likes_id: id,
					_grve_nonce: movedo_grve_main_data.nonce_likes
				};

				$.post( movedo_grve_main_data.ajaxurl, dataParams , function( response ) {
					if ( '-1' != response ) {
						if( 'active' == response.status ){
							link.addClass('active');
							icon.removeClass('grve-icon-heart-o').addClass('grve-icon-heart');
						} else {
							link.removeClass('active');
							icon.removeClass('grve-icon-heart').addClass('grve-icon-heart-o');
						}
						counter.html(response.likes);
					}
				}).fail(function(xhr, status, error) {
				});

				return false;
			});
		},
		postSocials: function(){
			var $social = $('#grve-single-post-meta-sticky .grve-post-socials li a'),
				initSize = 36;

			if( $(window).width() + scrollBarWidth <= tabletLandscape ) {
				return;
			}

			$social.unbind('mouseenter').bind('mouseenter', function() {
				var $this = $(this),
					newSize = $this.find('span').outerWidth();
				$this.css('width', newSize + initSize);
			});

			$social.unbind('mouseleave').bind('mouseleave', function() {
				var $this = $(this);
				$this.css('width', initSize);
			});
		},
		fullHeightSeparator : function(){
			var $section = $('.grve-separator-fullheight');
			$section.each(function(){
				var $that = $(this),
					$separator = $that.find('.grve-separator'),
					delay;

				setSeparatorH();
				$that.css({
					'visibility' : 'visible'
				});

				if( !isMobile.any() ) {
					$(window).on("resize",resizer);
				} else {
					$(window).on("orientationchange",resizer);
				}

				function resizer(){
					window.clearTimeout(delay);
					delay = window.setTimeout(function() {
						setSeparatorH();
					}, 300);
				}
				function getHeight(){
					var height = $that.outerHeight();
					return height;
				}

				function setSeparatorH(){
					$separator.css({
						'height' : getHeight()
					});
				}
			});
		}
	};

	// # Basic Elements
	// ============================================================================= //
	GRVE.basicElements = {
		init: function(){
			this.splitTitle();
			this.autoHeadings();
			this.pieChart();
			this.progressBars();
			this.counter();
			this.slider();
			this.splitContentSlider();
			this.testimonial();
			this.flexibleCarousel();
			this.carousel();
			this.advancedPromo();
			this.imageText();
			this.imageTextParallax();
			this.doubleImageText();
			this.portfolioParallax();
			this.teamParallax();
			this.testimonialParallax();
			this.sliderParallax();
			this.messageBox();
			this.wooProduct();
			this.wooProductZoom();
			this.animAppear();
			this.htmlVideoPlayWhenAppear();
			this.accordionToggle();
			this.tabs();
			this.productSocials();
			this.countdown();
			this.hovers();
		},
		splitTitle: function(){
			var $title = $('.grve-split-title span');
			$title.each(function(){
				var $that = $(this),
					text = $that.text(),
					str = text.trim(),
					charLength = str.length;

				$that.html('');
				for (var i in str) {
					var $char = $('<span class="grve-char"></span>');
					$char.appendTo( $that );
					$char.text(str[i]);
					$that.append($char);

					if( str[i] == ' ' ){
						$char.addClass('space');
					}
				}
				$that.addClass('grve-show');
			});
		},
		autoHeadings: function(){
			var $portfolio = $('.grve-portfolio.grve-auto-headings .grve-isotope-item-inner');
			$portfolio.autoHeading({
				compressor : 20,
				items : [
					{ 'item' : '.grve-title', 'min' : 18, 'max' : 50 },
					{ 'item' : '.grve-description', 'min' : 11, 'max' : 18 }
				]
			});
			$('.grve-blog-item.grve-style-2 .grve-blog-item-inner').autoHeading({
				compressor : 10,
				items : [
					{ 'item' : '.grve-post-title', 'min' : 16, 'max' : 30 }
				]
			});
		},
		pieChart: function(){

			$('.grve-chart-number').each(function() {
				var $element  = $(this),
					delay     = $element.parent().data('delay') !== '' ? parseInt( $element.parent().data('delay') ) : 0,
					size      = $element.data('pie-size'),
					chartSize = '130';
				if( size == 'small' ){
					chartSize = '100';
				}
				if( size == 'large' ){
					chartSize = '160';
				}

				$element.css({ 'width' : chartSize, 'height' : chartSize, 'line-height' : chartSize + 'px' });

				if( $element.parents('.grve-modal-element').length ){
					$('.grve-modal-popup').on( 'grve_open_modal', function(){
						GRVE.basicElements.pieChartInit( $element, chartSize );
					});
				} else {
					$element.appear(function() {
						setTimeout(function () {
							GRVE.basicElements.pieChartInit( $element, chartSize );
						}, delay);
					});
				}
			});

		},
		pieChartInit: function( $element, size ){

			var activeColor = $element.data('pie-active-color') !== '' ? $element.data('pie-active-color') : 'rgba(0,0,0,1)',
				pieColor    = $element.data('pie-color') !== '' ? $element.data('pie-color') : 'rgba(0,0,0,0.1)',
				pieLineCap  = $element.data('pie-line-cap') !== '' ? $element.data('pie-line-cap') : 'round',
				lineSize    = $element.data('pie-line-size') !== '' ? $element.data('pie-line-size') : '6',
				chartSize   = size;


			$element.easyPieChart({
				barColor: activeColor,
				trackColor: pieColor,
				scaleColor: false,
				lineCap: pieLineCap,
				lineWidth: lineSize,
				animate: 1500,
				size: chartSize
			});
		},
		progressBars: function(){
			$('.grve-progress-bar').each(function() {

				var $element  = $(this);
				if( $element.parents('.grve-modal-element').length ){
					$('.grve-modal-popup').on( 'grve_open_modal', function(){
						GRVE.basicElements.progressBarsInit( $element );
					});
				} else {
					$element.appear(function() {
						GRVE.basicElements.progressBarsInit( $element );
					});
				}
			});
		},
		progressBarsInit: function( $element ){
			var val = $element.attr('data-value'),
				percentage = $('<span class="grve-percentage">'+ val + '%'+'</span>');

			$element.find('.grve-bar-line').animate({ width: val + '%' }, 1600);
			if( $element.parent().hasClass('grve-style-1') ) {
				percentage.appendTo($element.find('.grve-bar')).animate({ left: val + '%' }, 1600);
			} else {
				percentage.appendTo($element.find('.grve-bar-title'));
			}
		},
		counter: function(){
			if( bodyLoader === true ){
				return;
			}
			var selector = '.grve-counter-item span';
			$(selector).each(function(i){
				var elements = $(selector)[i],
					thousandsSeparator = $(this).attr('data-thousands-separator') !== '' ? $(this).attr('data-thousands-separator') : ',';
				$(elements).attr('id','grve-counter-' + i );
				var delay = $(this).parents('.grve-counter').attr('data-delay') !== '' ? parseInt( $(this).parents('.grve-counter').attr('data-delay') ) : 200,
					options = {
						useEasing    : true,
						useGrouping  : true,
						separator    : $(this).attr('data-thousands-separator-vis') !== 'yes' ? thousandsSeparator : '',
						decimal      : $(this).attr('data-decimal-separator') !== '' ? $(this).attr('data-decimal-separator') : '.',
						prefix       : $(this).attr('data-prefix') !== '' ? $(this).attr('data-prefix') : '',
						suffix       : $(this).attr('data-suffix') !== '' ? $(this).attr('data-suffix') : ''
					},
					counter = new CountUp( $(this).attr('id') , $(this).attr('data-start-val'), $(this).attr('data-end-val'), $(this).attr('data-decimal-points'), 2.5, options);
				$(this).appear(function() {
					setTimeout(function () {
						counter.start();
					}, delay);
				});
			});
		},
		slider: function(){

			var $element = $('#grve-main-content .grve-slider-element, #grve-single-media .grve-slider-element, .mfp-content .grve-slider-element, #grve-safebutton-area .grve-slider-element');

			$element.each(function(){

				var $slider = $(this),
					$nextNav = $slider.parents('.grve-slider').find('.grve-carousel-next'),
					$prevNav = $slider.parents('.grve-slider').find('.grve-carousel-prev'),
					sliderSpeed = ( parseInt( $slider.attr('data-slider-speed') ) ) ? parseInt( $slider.attr('data-slider-speed') ) : 3000,
					transition = $slider.attr('data-slider-transition'),
					loop = $slider.attr('data-slider-loop') != 'no' ? true : false,
					autoPlay = $slider.attr('data-slider-autoplay') != 'no' ? true : false,
					autoHeight = $slider.attr('data-slider-autoheight') == 'yes' ? true : false,
					sliderPause = $slider.attr('data-slider-pause') == 'yes' ? true : false,
					pagination = $slider.attr('data-pagination') != 'no' ? true : false,
					animateOut = false,
					animateIn = false;

				// Slider Trantition
				if( $slider.parents('.grve-slider').hasClass('grve-layout-2') || 'fade' == transition ){
					animateOut = 'carousel-fade-out';
					animateIn = 'carousel-fade-in';
				}

				if ( $slider.find('.grve-slider-item').length == 1 ) {
					loop = false;
				}

				// Slider Init
				$slider.owlCarousel({
					items : 1,
					loop : loop,
					autoplay : autoPlay,
					autoplayTimeout : sliderSpeed,
					autoplayHoverPause : sliderPause,
					smartSpeed : 500,
					dots : pagination,
					animateOut : animateOut,
					animateIn : animateIn,
					autoHeight : autoHeight,
					itemClass : 'grve-slider-item-wrapper'
				});

				// Fixed for Carousel middle content
				if( $slider.parents('.grve-section').hasClass('grve-middle-content') ){
					var smallDelay;
					GRVE.basicElements.fixMiddleCarousel( $slider );
					$slider.parents('.grve-section').data('plugin_columnSize').reCalculate();
					$(window).on('resize',function(){
						window.clearTimeout(smallDelay);
						smallDelay = window.setTimeout(function () {
							GRVE.basicElements.fixMiddleCarousel( $slider );
						}, 300);
					});
				}

				$slider.parents('.grve-slider').css('visibility','visible');

				// Go to the next item
				$nextNav.on('click', function() {
					$slider.trigger('next.owl.carousel');
				});
				// Go to the previous item
				$prevNav.on('click', function() {
					$slider.trigger('prev.owl.carousel');
				});

			});

		},
		splitContentSlider: function(){

			var $element = $('.grve-slit-content-slider');

			$element.each(function(){

				var $slider = $(this),
					$dots = $slider.parents('.grve-split-content').find('.grve-slider-dots'),
					sliderSpeed = ( parseInt( $slider.attr('data-slider-speed') ) ) ? parseInt( $slider.attr('data-slider-speed') ) : 3000,
					transition = $slider.attr('data-slider-transition'),
					loop = $slider.attr('data-slider-loop') != 'no' ? true : false,
					autoPlay = $slider.attr('data-slider-autoplay') != 'no' ? true : false,
					autoHeight = $slider.attr('data-slider-autoheight') == 'yes' ? true : false,
					animateOut = false,
					animateIn = false;

				// Slider Trantition
				if( $slider.parents('.grve-slider').hasClass('grve-layout-2') || 'fade' == transition ){
					animateOut = 'carousel-fade-out';
					animateIn = 'carousel-fade-in';
				}

				if ( $slider.find('.grve-slider-item').length == 1 ) {
					loop = false;
				}

				// Slider Init
				$slider.owlCarousel({
					items : 1,
					loop : loop,
					autoplay : autoPlay,
					autoplayTimeout : sliderSpeed,
					autoplayHoverPause : false,
					smartSpeed : 500,
					dots : true,
					animateOut : animateOut,
					dotsContainer : $dots,
					animateIn : animateIn,
					autoHeight : autoHeight,
					itemClass : 'grve-slider-item-wrapper'
				});

				$slider.parents('.grve-slider').css('visibility','visible');

			});

		},
		testimonial: function(){

			var $element = $('.grve-testimonial.grve-carousel-element');

			$element.each(function(){
				var $testimonial = $(this),
					sliderSpeed = ( parseInt( $testimonial.attr('data-slider-speed') ) ) ? parseInt( $testimonial.attr('data-slider-speed') ) : 3000,
					pagination = $testimonial.attr('data-pagination') != 'no' ? true : false,
					paginationSpeed = ( parseInt( $testimonial.attr('data-pagination-speed') ) ) ? parseInt( $testimonial.attr('data-pagination-speed') ) : 400,
					transition = $testimonial.attr('data-slider-transition'),
					autoHeight = $testimonial.attr('data-slider-autoheight') == 'yes' ? true : false,
					autoPlay = $testimonial.attr('data-slider-autoplay') != 'no' ? true : false,
					sliderPause = $testimonial.attr('data-slider-pause') == 'yes' ? true : false,
					loop = true,
					animateOut = false,
					animateIn = false;

				// Testimonial Trantition
				if( $testimonial.hasClass('grve-layout-2') || 'fade' == transition ){
					animateOut = 'carousel-fade-out';
					animateIn = 'carousel-fade-in';
				}
				if ( $testimonial.find('.grve-testimonial-element').length == 1 ) {
					loop = false;
				}

				// Testimonial Init
				$testimonial.owlCarousel({
					items : 1,
					loop : loop,
					autoplay : autoPlay,
					autoplayTimeout : sliderSpeed,
					autoplayHoverPause : sliderPause,
					smartSpeed : 500,
					dots : pagination,
					animateOut : animateOut,
					animateIn : animateIn,
					autoHeight : autoHeight,
					itemClass : 'grve-testimonial-item-wrapper'
				});

				// Fixed for Carousel middle content
				if( $testimonial.parents('.grve-section').hasClass('grve-middle-content') ){
					var smallDelay;
					GRVE.basicElements.fixMiddleCarousel( $testimonial );
					$testimonial.parents('.grve-section').data('plugin_columnSize').reCalculate();
					$(window).on('resize',function(){
						window.clearTimeout(smallDelay);
						smallDelay = window.setTimeout(function () {
							GRVE.basicElements.fixMiddleCarousel( $testimonial );
						}, 300);
					});
				}

				$testimonial.css('visibility','visible');

			});
		},
		flexibleCarousel: function(){

			var $element = $('.grve-flexible-carousel-element');

			$element.each(function(){

				var $carousel = $(this),
					$nextNav = $carousel.parents('.grve-flexible-carousel').find('.grve-carousel-next'),
					$prevNav = $carousel.parents('.grve-flexible-carousel').find('.grve-carousel-prev'),
					sliderSpeed = ( parseInt( $carousel.attr('data-slider-speed') ) ) ? parseInt( $carousel.attr('data-slider-speed') ) : 3000,
					pagination = $carousel.attr('data-pagination') != 'no' ? true : false,
					paginationSpeed = ( parseInt( $carousel.attr('data-pagination-speed') ) ) ? parseInt( $carousel.attr('data-pagination-speed') ) : 400,
					autoHeight = $carousel.attr('data-slider-autoheight') == 'yes' ? true : false,
					autoPlay = $carousel.attr('data-slider-autoplay') != 'no' ? true : false,
					sliderPause = $carousel.attr('data-slider-pause') == 'yes' ? true : false,
					loop = true,
					itemNum = parseInt( $carousel.attr('data-items')),
					tabletLandscapeNum = $carousel.attr('data-items-tablet-landscape') ? parseInt( $carousel.attr('data-items-tablet-landscape')) : 4,
					tabletPortraitNum = $carousel.attr('data-items-tablet-portrait') ? parseInt( $carousel.attr('data-items-tablet-portrait')) : 2,
					mobileNum = $carousel.attr('data-items-mobile') ? parseInt( $carousel.attr('data-items-mobile')) : 1,
					gap = $carousel.parents('.grve-flexible-carousel').hasClass('grve-with-gap') ? 30 : 0,
					padding = $carousel.parents('.grve-flexible-carousel').hasClass('grve-with-gap') && $carousel.parents('.grve-section').hasClass('grve-fullwidth') ? 30 : 0;

				if ( $carousel.find('.grve-flexible-carousel-element').length == 1 ) {
					loop = false;
				}

				// Carousel Init
				$carousel.owlCarousel({
					items : 1,
					loop : loop,
					autoplay : autoPlay,
					autoplayTimeout : sliderSpeed,
					autoplayHoverPause : sliderPause,
					smartSpeed : 500,
					dots : pagination,
					responsive : {
						0 : {
							items : mobileNum
						},
						768 : {
							items : tabletPortraitNum
						},
						1024 : {
							items : tabletLandscapeNum
						},
						1200 : {
							items : itemNum
						}
					},
					margin : gap,
					stagePadding : padding,
					autoHeight : autoHeight,
					itemClass : 'grve-carousel-item-wrapper'
				});

				// Fixed for Carousel middle content
				if( $carousel.parents('.grve-section').hasClass('grve-middle-content') ){
					var smallDelay;
					GRVE.basicElements.fixMiddleCarousel( $carousel );
					$carousel.parents('.grve-section').data('plugin_columnSize').reCalculate();
					$(window).on('resize',function(){
						window.clearTimeout(smallDelay);
						smallDelay = window.setTimeout(function () {
							GRVE.basicElements.fixMiddleCarousel( $carousel );
						}, 300);
					});
				}

				$carousel.css('visibility','visible');

				// Go to the next item
				$nextNav.on('click', function() {
					$carousel.trigger('next.owl.carousel');
				});
				// Go to the previous item
				$prevNav.on('click', function() {
					$carousel.trigger('prev.owl.carousel');
				});

			});
		},
		carousel: function(){

			var $element = $('.grve-carousel-element');

			$element.each(function(){

				var $carousel = $(this),
					$nextNav = $carousel.parents('.grve-carousel').find('.grve-carousel-next'),
					$prevNav = $carousel.parents('.grve-carousel').find('.grve-carousel-prev'),
					sliderSpeed = ( parseInt( $carousel.attr('data-slider-speed') ) ) ? parseInt( $carousel.attr('data-slider-speed') ) : 3000,
					pagination = $carousel.attr('data-pagination') != 'no' ? true : false,
					paginationSpeed = ( parseInt( $carousel.attr('data-pagination-speed') ) ) ? parseInt( $carousel.attr('data-pagination-speed') ) : 400,
					autoHeight = $carousel.attr('data-slider-autoheight') == 'yes' ? true : false,
					autoPlay = $carousel.attr('data-slider-autoplay') != 'no' ? true : false,
					sliderPause = $carousel.attr('data-slider-pause') == 'yes' ? true : false,
					loop = $carousel.attr('data-slider-loop') != 'no' ? true : false,
					itemNum = parseInt( $carousel.attr('data-items')),
					tabletLandscapeNum = $carousel.attr('data-items-tablet-landscape') ? parseInt( $carousel.attr('data-items-tablet-landscape')) : 3,
					tabletPortraitNum = $carousel.attr('data-items-tablet-portrait') ? parseInt( $carousel.attr('data-items-tablet-portrait')) : 3,
					mobileNum = $carousel.attr('data-items-mobile') ? parseInt( $carousel.attr('data-items-mobile')) : 1,
					gap = $carousel.parents('.grve-carousel').hasClass('grve-with-gap') && !isNaN( $carousel.data('gutter-size') ) ? Math.abs( $carousel.data('gutter-size') ) : 0,
					padding = $carousel.parents('.grve-carousel').hasClass('grve-with-gap') && $carousel.parents('.grve-section').hasClass('grve-fullwidth') && !isNaN( $carousel.data('gutter-size') ) ? Math.abs( $carousel.data('gutter-size') ) : 0;

				if ( $carousel.find('.grve-carousel-item').length == 1 ) {
					loop = false;
				}

				// Carousel Init
				$carousel.owlCarousel({
					loop : loop,
					autoplay : autoPlay,
					autoplayTimeout : sliderSpeed,
					autoplayHoverPause : sliderPause,
					smartSpeed : 500,
					dots : pagination,
					responsive : {
						0 : {
							items : mobileNum
						},
						768 : {
							items : tabletPortraitNum
						},
						1024 : {
							items : tabletLandscapeNum
						},
						1200 : {
							items : itemNum
						}
					},
					margin : gap,
					stagePadding : padding,
					itemClass : 'grve-carousel-item-wrapper'
				});

				// Fixed for Carousel middle content
				if( $carousel.parents('.grve-section').hasClass('grve-middle-content') ){
					var smallDelay;
					GRVE.basicElements.fixMiddleCarousel( $carousel );
					$carousel.parents('.grve-section').data('plugin_columnSize').reCalculate();
					$(window).on('resize',function(){
						window.clearTimeout(smallDelay);
						smallDelay = window.setTimeout(function () {
							GRVE.basicElements.fixMiddleCarousel( $carousel );
						}, 300);
					});
				}

				$carousel.css('visibility','visible');

				// Go to the next item
				$nextNav.on('click', function() {
					$carousel.trigger('next.owl.carousel');
				});
				// Go to the previous item
				$prevNav.on('click', function() {
					$carousel.trigger('prev.owl.carousel');
				});

			});
		},
		fixMiddleCarousel : function( $element ){
			$element.css({ 'width' : '0' });
			var $column = $element.parents('.grve-column-wrapper'),
				columnW = $column.width() - 1,
				owl = $element.data('owlCarousel');
			$element.css({ 'width' : columnW });
			owl.onResize();
		},
		advancedPromo: function(){
			var $item = $('.grve-expandable-info');
			$item.each(function(){
				var $that         = $(this),
					$wrapper      = $that.parents('.grve-section'),
					$content      = $that.find('.grve-expandable-info-content'),
					paddingTop    = parseInt( $wrapper.css('padding-top') ),
					paddingBottom = parseInt( $wrapper.css('padding-bottom') );

				$wrapper.addClass('grve-pointer-cursor');
				$wrapper.on('click',function(){

					var headerHeight   = $('#grve-header').length && $('#grve-header').data('sticky') != 'none' ? $('#grve-main-header').outerHeight() : 0,
						fieldBarHeight = $('.grve-fields-bar').length ? $('.grve-fields-bar').outerHeight() : 0,
						offset         = $(this).offset().top,
						distance       = offset - ( headerHeight + fieldBarHeight );

					if( $content.is(":visible") ){
						$content.slideUp( 600, function(){
							$content.removeClass('show');
						});
					} else {

						$('html,body').animate({
							scrollTop: distance
						}, 600,function(){
							$content.slideDown( function(){
								$content.addClass('show');
								return;
							});
						});
					}
				});
				$wrapper.mouseenter(function() {
					$(this).css({ 'padding-top' : paddingTop + 40, 'padding-bottom' : paddingBottom + 40 });
				});
				$wrapper.mouseleave(function() {
					$(this).css({ 'padding-top' : paddingTop, 'padding-bottom' : paddingBottom });
				});
			});
		},
		imageText: function(){
			var $el = $('.grve-image-text.grve-layout-1');
			if( !$el.length > 0 ) return;
			$el.each(function(){
				var $that = $(this),
					$img = $that.find('img'),
					$cont = $that.find('.grve-content');
				$img.css({ 'padding-top' : '', 'padding-bottom' : '' });
				$cont.css({ 'padding-top' : '', 'padding-bottom' : '' });
				$that.css('visibility','hidden');
				$img.imagesLoaded( function() {
					var imgHeight = $img.height(),
						contHeight = $cont.height(),
						space = parseInt( (imgHeight - contHeight)/2 );
					if( $(window).width() + scrollBarWidth >= mobileScreen ) {
						if( imgHeight < contHeight ){
							space = parseInt( (contHeight - imgHeight)/2 );
							$img.css({ 'padding-top' : space, 'padding-bottom' : space });
						} else {
							$cont.css({ 'padding-top' : space, 'padding-bottom' : space });
						}
					}
					$that.css('visibility','visible');
				});

			});
		},
		imageTextParallax: function(){
			var $el = $('.grve-image-text.grve-layout-2'),
				$paraller = $el.find('.grve-paraller');

			imagesLoaded( $el, function() {
				$paraller.paraller({
					wrapper : '.grve-paraller-wrapper',
					invert : false,
					tabletL : [1200, true],
					tabletP : [1023, false],
					mobileL : [767, false]
				});
			});
		},
		doubleImageText: function(){
			var $el = $('.grve-double-image-text'),
				$paraller = $el.find('.grve-paraller');

			imagesLoaded( $el, function() {
				$paraller.paraller({
					wrapper : '.grve-paraller-wrapper',
					invert : false,
					tabletL : [1200, true],
					tabletP : [1023, true],
					mobileL : [767, false]
				});
			});
		},
		portfolioParallax: function(){
			var $el = $('.grve-portfolio-movedo-style'),
				$paraller = $el.find('.grve-paraller');

			imagesLoaded( $el, function() {
				$paraller.paraller({
					wrapper : '.grve-paraller-wrapper',
					invert : false,
					tabletL : [1200, true],
					tabletP : [1023, true],
					mobileL : [767, false]
				});
			});
		},
		teamParallax: function(){
			var $el = $('.grve-team.grve-layout-2'),
				$paraller = $el.find('.grve-paraller');

			imagesLoaded( $el, function() {
				$paraller.paraller({
					wrapper : '.grve-paraller-wrapper',
					invert : false,
					tabletL : [1200, true],
					tabletP : [1023, true],
					mobileL : [767, false]
				});
			});
		},
		testimonialParallax: function(){
			var $el = $('.grve-testimonial.grve-layout-2'),
				$paraller = $el.find('.grve-paraller');

			imagesLoaded( $el, function() {
				$paraller.paraller({
					wrapper : '.grve-paraller-wrapper',
					invert : false,
					tabletL : [1200, true],
					tabletP : [1023, true],
					mobileL : [767, false]
				});
			});
		},
		sliderParallax: function(){
			var $el = $('.grve-content-slider.grve-layout-2'),
				$paraller = $el.find('.grve-paraller');

			imagesLoaded( $el, function() {
				$paraller.paraller({
					wrapper : '.grve-paraller-wrapper',
					invert : false,
					tabletL : [1200, true],
					tabletP : [1023, true],
					mobileL : [767, false]
				});
			});
		},
		iconBox: function(){
			var $iconBox = $('.grve-box-icon.grve-advanced-hover');
			if( isMobile.any() ) {
				$iconBox.css({'visibility' : 'visible'});
				return false;
			}
			$iconBox.each(function(){
				var $that = $(this),
					$text = $that.find('p'),
					$column = $that.parents('.grve-column'),
					space = 0,
					resize = false;

				setup();
				$(window).smartresize(setup);

				function updateParams(){
					space = $text.outerHeight();
				}

				function resetIcon(){
					$that.css({ 'top' : '' });
					$text.css({ 'opacity' : 1, 'bottom' : '' });
				}

				function setup(){
					if(!resize){
						resize = true;

						resetIcon();
						updateParams();

						$column.css({ 'overflow' : 'hidden' });
						$that.css({ 'top' : space, 'visibility' : 'visible' });
						$text.css({ 'opacity' : 0, 'position' : 'relative', 'bottom' : '-120%' });

						resize = true;
					}
				}

				$column.hover(function(){
					$that.stop( true, true ).animate({
						'top' : 0
					},400, 'easeOutBack');
					$text.stop( true, true ).delay( 100 ).animate({
						'opacity' : 1,
						'bottom' : 0
					},600, 'easeOutBack');
				},function(){
					$that.stop( true, true ).animate({
						'top' : space
					},500, 'easeOutBack');
					$text.stop( true, true ).animate({
						'opacity' : 0,
						'bottom' : '-120%'
					},400, 'easeOutBack');
				});

				function resize(){
					var delay;
					window.clearTimeout(delay);
					delay = window.setTimeout(function() {
						setup();
					}, 200);
				}

			});

		},
		messageBox: function(){
			var infoMessage = $('.grve-message'),
			closeBtn = infoMessage.find($('.grve-close'));
			closeBtn.on('click', function() {
				$(this).parent().slideUp(150);
			});
		},
		wooProduct: function(){
			var $item   = $('.grve-product-item'),
				$addBtn = $item.find('.add_to_cart_button');
			$addBtn.on('click',function(){
				$(this).parents('.grve-product-item').addClass('grve-product-added');
			});
		},
		wooProductZoom: function(){
			if( !isMobile.any() ){
				if ( $('.grve-product-image.easyzoom').length ) {
					var $easyzoom = $('.grve-product-image.easyzoom').easyZoom();
					var api = $easyzoom.data('easyZoom');
					$( ".variations_form" ).on( 'woocommerce_variation_select_change', function( event, variation ){
						var imageZoom = $('.grve-product-image .woocommerce-main-image').attr('href');
						var imageSrc = $('.grve-product-image .woocommerce-main-image img').attr('src');
						api.swap( imageSrc , imageZoom );
					} );
				}
			}
		},
		animAppear: function(){
			if( bodyLoader || $('body').hasClass('page-template-template-full-page') || $('body').hasClass('page-template-template-pilling-page') ){
				return;
			}
			if( isMobile.any() && !deviceAnimAppear ) {
				$('.grve-animated-item').css('opacity',1);
			} else {
				$('.grve-animated-item').each(function() {
					var $that = $(this),
						timeDelay = $that.attr('data-delay');

					if( $that.parents('.grve-clipping-animation').length ) return;

					$that.appear(function() {
						setTimeout(function () {
							$that.addClass('grve-animated');
						}, timeDelay);
					},{accX: 0, accY: -150});
				});
			}
		},
		htmlVideoPlayWhenAppear: function(){
			var $video = $('.grve-embed-video');
			$video.each(function(){
				var $that = $(this);
				$that[0].pause();
				$that.appear(function(){
					if( $that[0].autoplay ){
						$that[0].play();
					}
				},{accX: 0, accY: -150});
			});
		},
		accordionToggle: function(){
			$('.grve-accordion-wrapper.grve-action-toggle li .grve-title-wrapper').on('click', function() {

				var $that = $(this);
				$that
					.toggleClass('active')
					.next().slideToggle(350);

				var $content = $that.parent();
				if( $content.find('.grve-isotope').length ) {
					setTimeout(function(){
						GRVE.isotope.init();
					},100);
				}
				if( $content.find('.grve-blog-leader.grve-movedo-style').length ) {
					GRVE.leaderPostSize.init();
				}
				if( $content.find('.owl-carousel').length ) {
					$content.find('.owl-carousel').each(function(){
						var owl = $(this).data('owlCarousel');
						owl.onResize();
					});
				}
			});
			$('.grve-accordion-wrapper.grve-action-accordion li .grve-title-wrapper').on('click', function() {

				var $that = $(this);
				$that
					.toggleClass('active').next().slideToggle(350)
					.parent().siblings().find('.grve-title-wrapper').removeClass('active')
					.next().slideUp(350);

				var $content = $that.parent();
				if( $content.find('.grve-isotope').length ) {
					setTimeout(function(){
						GRVE.isotope.init();
					},100);
				}
				if( $content.find('.grve-blog-leader.grve-movedo-style').length ) {
					GRVE.leaderPostSize.init();
				}
				if( $content.find('.owl-carousel').length ) {
					$content.find('.owl-carousel').each(function(){
						var owl = $(this).data('owlCarousel');
						owl.onResize();
					});
				}
			});
		},
		tabs: function(){
			$('.grve-tab-title').click(function () {
				var $that = $(this),
					$title = $that.parents('.grve-tab').find('.grve-tab-title'),
					$content = $that.parents('.grve-tab').find('.grve-tab-content'),
					contentId = $that.data('rel');
				$title.removeClass('active');
				$that.addClass('active');
				$content.removeClass('active');
				$that.parents('.grve-tab').find(contentId).addClass('active');

				if( $content.find('.grve-isotope').length ) {
					setTimeout(function(){
						GRVE.isotope.init();
					},100);
				}
				if( $content.find('.grve-blog-leader.grve-movedo-style').length ) {
					GRVE.leaderPostSize.init();
				}
				if( $content.find('.owl-carousel').length ) {
					$content.find('.owl-carousel').each(function(){
						var owl = $(this).data('owlCarousel');
						owl.onResize();
					});
				}
			});
		},
		productSocials: function(){
			var $socials = $('.grve-product-social'),
				$item    = $socials.find('li');
			if( !$socials.length ) return;

			$socials.appear(function() {
				$item.each(function(i,n){
					var $this = $(this);
					setTimeout(function(){
						$this.addClass('grve-animated');
					},150 * i);
				});
			},{accX: 0, accY: -50});
		},
		countdown: function(){
			$('.grve-countdown').each(function() {
				var $this        = $(this),
					finalDate    = $this.data('countdown'),
					numbersSize  = $this.data('numbers-size'),
					textSize     = $this.data('text-size'),
					numbersColor = $this.data('numbers-color'),
					textColor    = $this.data('text-color'),
					countdownItems = '',
					text = '',
					countdownFormat = $this.data('countdown-format').split('|');

				$.each( countdownFormat, function( index, value ) {
					switch (value) {
						case 'w':
							text = movedo_grve_main_data.string_weeks;
							break;
						case 'D':
						case 'd':
						case 'n':
							text = movedo_grve_main_data.string_days;
							break;
						case 'H':
							text = movedo_grve_main_data.string_hours;
							break;
						case 'M':
							text = movedo_grve_main_data.string_minutes;
							break;
						case 'S':
							text = movedo_grve_main_data.string_seconds;
							break;
						default:
							text = '';
					}
					countdownItems += '<div class="grve-countdown-item">';
					countdownItems += '<div class="grve-number grve-' + numbersSize + ' grve-text-' + numbersColor + '">%' + value + '</div>';
					countdownItems += '<span class="grve-' + textSize + ' grve-text-' + textColor + '">' + text + '</span>';
					countdownItems += '</div>';

				});

				$this.countdown(finalDate, function(event) {
					$this = $(this).html(event.strftime( countdownItems ));
				});
			});
		},
		hovers: function(){
			var $hoverItem = $('.grve-image-hover');
			if( isMobile.any() && 0 == movedo_grve_main_data.device_hover_single_tap ) {
				var touchevent = 'touchend';
				if( $hoverItem.parent().parent().hasClass('grve-carousel-item') ) {
					touchevent = 'touchstart';
				}
				$hoverItem.on(touchevent, function(e) {
					var $item = $(this);
					if ( !$item.hasClass('hover') ) {
						$item.addClass('hover');
						$hoverItem.not(this).removeClass('hover');
						e.preventDefault();
					}
				});
				$(document).on('touchstart touchend', function(e) {
					if ( !$hoverItem.is(e.target) && $hoverItem.has(e.target).length === 0 ) {
						$hoverItem.removeClass('hover');
					}
				});
			} else {
				$hoverItem.unbind('click');
				$hoverItem.unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
					$(this).toggleClass('hover');
				});
			}
		}
	};

	// # Parallax Section
	// ============================================================================= //
	GRVE.parallaxSection = {
		init : function( section ){
			var $section = $(section);
			imagesLoaded( $(section), function() {
				$(section).bgParallax({
					elClass : '.grve-html5-bg-video, .grve-bg-image'
				});
			});
		}
	};

	// # Section Settings
	// ============================================================================= //
	GRVE.sectionSettings = {
		init: function(){

			if( !$('#grve-sidebar').length > 0 ) return;

			var section      = '#grve-content .grve-section',
				windowWidth  = $(window).width(),
				themeWidth   = $('#grve-theme-wrapper').width(),
				wrapperWidth = $('.grve-content-wrapper').width(),
				contentWidth = $('#grve-main-content').width(),
				sidebarWidth = $('#grve-sidebar').outerWidth(),
				space        = (themeWidth - wrapperWidth)/2,
				sidebarSpace = space + wrapperWidth - contentWidth;


			$(section).each(function(){
				var $section = $(this);
				if( $section.hasClass('grve-fullwidth-background') ){
					fullBg($section);
				}
				if( $section.hasClass('grve-fullwidth') ){
					fullElement($section);
				}

			});

			function fullBg( section ) {
				if( windowWidth + scrollBarWidth >= tabletPortrait ) {
					if( $('.grve-right-sidebar').length ) {
						section.css({ 'visibility': 'visible', 'padding-left':space, 'padding-right': sidebarSpace, 'margin-left': -space, 'margin-right': -sidebarSpace});
					}
					else {
						section.css({ 'visibility': 'visible', 'padding-left':sidebarSpace, 'padding-right': space, 'margin-left': -sidebarSpace, 'margin-right': -space});
					}
				} else {
					section.css({ 'visibility': 'visible', 'padding-left':'', 'padding-right': '', 'margin-left': '', 'margin-right': ''});
				}

			}

			function fullElement( section ) {
				if( windowWidth + scrollBarWidth >= tabletPortrait ) {
					if( $('.grve-right-sidebar').length ) {
						section.css({ 'visibility': 'visible', 'padding-left':0, 'padding-right': sidebarSpace, 'margin-left': -space, 'margin-right': -sidebarSpace});
					}
					else {
						section.css({ 'visibility': 'visible', 'padding-left':sidebarSpace, 'padding-right': 0, 'margin-left': -sidebarSpace, 'margin-right': -space});
					}
				} else {
					section.css({ 'visibility': 'visible', 'padding-left':'', 'padding-right': '', 'margin-left': -space, 'margin-right': -space});
				}
			}
		}
	};

	// # Isotope
	// ============================================================================= //
	GRVE.isotope = {

		init: function(){
			var $selector = $('.grve-isotope');
			if( !$selector.length ) return;
			$selector.each(function(){
				var $element = $(this);
				GRVE.isotope.settings($element);
			});

		},
		settings: function($element){
			var $container   = $element.find('.grve-isotope-container'),
				$curCategory = $element.find('.grve-current-category'),
				$isotopItem  = $container.find('.grve-isotope-item'),
				layout       = $element.data('layout') !== '' ? $element.data('layout') : 'fitRows',
				columnWidth  = $element.hasClass('grve-portfolio') ? '.grve-image-square' : '',
				dataSpinner  = $element.data('spinner'),
				gap          = $element.hasClass('grve-with-gap') && !isNaN( $element.data('gutter-size') ) ? Math.abs( $element.data('gutter-size') )/2 : 0,
				isOriginLeft = $('body').hasClass('rtl') ? false : true;

			var offset       = $element.parents('.grve-section').hasClass('grve-fullwidth') ? -(gap * 2) : gap * 2,
				windowWidth  = $(window).width() + scrollBarWidth,
				wrapperW, columns, columnW, containerW;

			if( $element.hasClass('grve-with-gap') && $element.parents('.grve-section').hasClass('grve-fullwidth') ) {
				$element.css({'padding-left' : gap*2, 'padding-right' : gap*2 });
			}

			// Add Spinner
			if( dataSpinner == 'yes' ) {
				addSpinner();
			}
			// Filters
			filter();

			var resizing = false,
				initIso  = false,
				smallDelay;

			updateParams( initIsotope );

			if( !isMobile.any() || isMobile.Android() ) {
				$(window).smartresize(updateParams);
			} else {
				$(window).on("orientationchange",updateParams);
			}

			$('.grve-modal-popup').on( "grve_relayout_isotope", function() {
				updateParams();
			});

			function updateParams(callback){
				if( !resizing ) {
					resizing = true;
					windowWidth = $(window).width() + scrollBarWidth;
					wrapperW = $element.innerWidth() -2;
					columns = setColumns();
					columnW = ( wrapperW + offset ) / columns;
					columnW = (columnW % 1 !== 0) ? Math.ceil(columnW) : columnW;
					containerW = columnW * columns;

					itemSize();
					containerSize();
					if( callback && !initIso ) callback();

					if( initIso ) {
						window.clearTimeout(smallDelay);
						smallDelay = window.setTimeout( function(){
							// Equal Columns
							if( layout === 'fitRows' && gridEqual ) {
								gridEqualColumns();
							}
							if( $container.parents('.grve-section').hasClass('grve-custom-height') ){
								$container.parents('.grve-section').data('plugin_columnSize').reCalculate();
							}
						}, 200 );
					}

					$container.isotope('layout');
					resizing = false;
				}
			}

			function setColumns(){
				var columns = {
						largeS   : $element.data('columns-large-screen'),
						desktop  : $element.data('columns'),
						tabletL  : $element.data('columns-tablet-landscape'),
						tabletP  : $element.data('columns-tablet-portrait'),
						mobile  : $element.data('columns-mobile')
					};
				$element.removeClass('grve-isotope-column-5 grve-isotope-column-4 grve-isotope-column-3 grve-isotope-column-2 grve-isotope-column-1');
				if ( windowWidth > largeScreen ) {
					columns = columns.largeS;
				} else if ( windowWidth > tabletLandscape && windowWidth <= largeScreen ) {
					columns = columns.desktop;
				} else if ( windowWidth > tabletPortrait && windowWidth <= tabletLandscape ) {
					columns = columns.tabletL;
				} else if ( windowWidth > mobileScreen && windowWidth <= tabletPortrait ) {
					columns = columns.tabletP;
				} else {
					columns = columns.mobile;
				}

				$element.addClass('grve-isotope-column-' + columns);
				return columns;
			}

			function itemSize(){

				$isotopItem.css({ 'padding-left' : gap, 'padding-right' : gap, 'margin-bottom' : gap * 2, 'width' : columnW });
				// Item Width * 2
				if( columns != 1 ) {
					$container.find('.grve-image-landscape').css({ 'width': columnW * 2 }).find('.grve-media').css({ 'height': columnW - ( gap * 2 ) });
					$container.find('.grve-image-portrait').css({ 'width': columnW }).find('.grve-media').css({ 'height': ( columnW * 2 ) - ( gap * 2 ) });
				}

				// Item Column 2
				if( columns == 2 ) {
					if( windowWidth > mobileScreen ){
						$container.find('.grve-image-landscape').css({ 'width': columnW  }).find('.grve-media').css({ 'height': ( columnW / 2 ) - ( gap * 2 ) });
					} else {
						$container.find('.grve-image-landscape').css({ 'width': columnW  }).find('.grve-media').css({ 'height': columnW - ( gap * 2 ) });
					}
				}

				// Item Column 1
				if( columns == 1 ) {
					$container.find('.grve-image-landscape').css({ 'width': columnW  }).find('.grve-media').css({ 'height': '' });
					$container.find('.grve-image-portrait').css({ 'width': columnW }).find('.grve-media').css({ 'height': '' });
				}
			}

			function containerSize(){
				$container.css({'margin-left' : - gap, 'margin-right' : - gap, 'width' : containerW });
			}

			function initIsotope(){
				$container.isotope({
					itemSelector: '.grve-isotope-item',
					stamp: '.grve-isotope-stamp-item',
					layoutMode: layout,
					animationEngine : 'jquery',
					masonry: {
						columnWidth: columnWidth
					},
					resize: false,
					isOriginLeft: isOriginLeft
				});
				// layout Isotope after each image loads
				$container.imagesLoaded('always',function(){
					$container.isotope('layout');
					// Spinner
					var dataSpinner = $container.parent().data('spinner');
					if( dataSpinner == 'yes' ) {
						setTimeout(function() {
							removeSpinner();
						},2000);
					} else {
						$container.css({'opacity': 1});
						// Isotope Animation
						if( !isMobile.any() ){
							animation($container);
						} else {
							$container.find('.grve-isotope-item-inner').addClass('grve-animated');
						}
					}
				});

				initIso = true;
			}

			function addSpinner(){
				var $spinner = $('<div class="grve-spinner"></div>');
				$spinner.appendTo( $element );
			}

			function removeSpinner(){
				$element.find('.grve-spinner').fadeOut(600,function(){
					$container.css({'opacity': 1});
					animation();
				});
			}

			function animation(){
				var cnt = 1,
					itemAppeared = 1;
				$isotopItem.appear(function() {
					var $this = $(this),
						delay = 200 * cnt++;

					setTimeout(function () {
						itemAppeared++;
						if( itemAppeared == cnt ){
							cnt = 1;
						}
						$this.find('.grve-isotope-item-inner').addClass('grve-animated');
					}, delay);
				});
			}

			function filter(){
				$element.find('.grve-filter li').on('click', function() {
					var $filter      = $(this),
						selector     = $filter.attr('data-filter'),
						gototop      = $filter.parents('.grve-filter').attr('data-gototop') == 'no' ? false : true,
						title        = $filter.html(),
						$curCategory = $element.find('.grve-current-category');

					if( $curCategory.length > 0 ){
						$curCategory.find('span').html( title );
					}

					$container.isotope({
						filter: selector
					});

					// Go tot top
					if( gototop ) {
						GRVE.pageSettings.linkGoToTop( $filter.parent(), 300, 30 );
					}

					$(this).addClass('selected').siblings().removeClass('selected');
				});
			}

			function gridEqualColumns(){
				var $elContent = $container.find('.grve-isotope-item:not(.format-link):not(.format-quote)'),
					columnMaxH = 0;

				// Reset Height
				$container.find('.grve-isotope-item .grve-post-content').css('height','auto');
				$container.find('.grve-isotope-item .grve-blog-item-inner').css('height','auto');
				$container.find('.grve-isotope-item .grve-post-meta-wrapper').removeClass('grve-bottom');

				$elContent.filter('.has-post-thumbnail').each(function(){
					($(this).find('.grve-blog-item-inner').outerHeight(true) > columnMaxH) ? columnMaxH = $(this).find('.grve-blog-item-inner').outerHeight(true) : columnMaxH = columnMaxH;
				});

				if( !$container.find('.has-post-thumbnail').length ) {
					($container.find('.grve-blog-item-inner').outerHeight(true) > columnMaxH) ? columnMaxH = $container.find('.grve-blog-item-inner').outerHeight(true) : columnMaxH = columnMaxH;
				}

				$container.find('.grve-isotope-item .grve-blog-item-inner').css('height',columnMaxH);
				$container.find('.grve-isotope-item .grve-post-meta-wrapper').addClass('grve-bottom');
				$container.find('.grve-isotope-item.grve-style-2').addClass('grve-middle');

				$container.isotope('layout');
			}
		},
		noIsoFilters: function() {
			var $selector = $('.grve-non-isotope');
			$selector.each(function(){
				var $that = $(this);
				$that.find('.grve-filter li').on('click', function() {
					var selector = $(this).attr('data-filter');
					if ( '*' == selector ) {
						$that.find('.grve-non-isotope-item').fadeIn('1000');
					} else {
						$that.find('.grve-non-isotope-item').hide();
						$that.find(selector).fadeIn('1000');
					}
					$(this).addClass('selected').siblings().removeClass('selected');
				});
			});
		}
	};

	// # Social Bar For Post
	// ============================================================================= //
	GRVE.socialBar = {
		init : function(){
			var $bar = $('#grve-socials-bar');
			if( !$bar.length > 0 ) {
				return;
			}
			if( isMobile.any() ) {
				$bar.addClass('grve-no-animation');
				return;
			}
			var posTop       = $bar.offset().top,
				scroll       = $(window).scrollTop(),
				windowHeight = $(window).height(),
				offset       = ( $bar.offset().top - windowHeight ) + 50;

			if( scroll > offset ) {
				this.showSocials();
			} else {
				this.hideSocials();
			}
		},
		showSocials : function(){
			var $item = $('#grve-socials-bar').find('ul.grve-socials li a'),
				i = 0;
			$item.each(function(){
				var $that = $(this);
				i++;
				setTimeout(function () {
					$that.addClass('show');
				}, i * 200 );
			});
		},
		hideSocials : function(){
			var $item = $('#grve-socials-bar').find('ul.grve-socials li a');
			$item.removeClass('show');
		}
	};


	// # Scroll Direction
	// ============================================================================= //
	GRVE.scrollDir = {
		init: function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScrollTop){
				lastScrollTop = scroll;
				return { direction : 'scrollDown'  };
			} else {
				lastScrollTop = scroll;
				return { direction : 'scrollUp'  };
			}

			lastScrollTop = scroll;
		}
	};

	// # Full Page
	// ============================================================================= //
	GRVE.fullPage = {
		init: function(){
			var $fPage = $('#grve-fullpage');
			if( !$fPage.length > 0 ) return;
				var $section = $fPage.find('.grve-row-section');
				var deviceNavigation = true;
				var deviceAutoScrolling = true;
				var scrollOverflow = true;
				var fitToSection = true;
				var speed = $fPage.data('scroll-speed');
				var deviceFullPageEnable = $fPage.data('device-scrolling') == 'yes' ? true : false;
				var lockAnchors = $fPage.data('lock-anchors') == 'yes' ? true : false;
				var loop = $fPage.data('scroll-loop');
				var loopTop = false;
				var loopBottom = false;
				if ( 'both' == loop || 'top' == loop ) {
					loopTop = true;
				}
				if ( 'both' == loop || 'bottom' == loop ) {
					loopBottom = true;
				}

				if( isMobile.any() && !deviceFullPageEnable ) {
					deviceNavigation = false;
					deviceAutoScrolling = false;
					scrollOverflow = false;
					fitToSection = false;
					$section.find('.grve-animated-item').addClass('grve-animated');
				}

				var navigationAnchorTooltips = $('[data-anchor-tooltip]').map(function(){
					return $(this).data('anchor-tooltip').toString();
				}).get();

			$fPage.fullpage({
				navigation: deviceNavigation,
				navigationPosition: 'right',
				navigationTooltips: navigationAnchorTooltips,
				sectionSelector: $section,
				css3: true,
				scrollingSpeed: speed,
				autoScrolling : deviceAutoScrolling,
				fitToSection : fitToSection,
				lockAnchors : lockAnchors,
				loopTop : loopTop,
				loopBottom : loopBottom,
				scrollOverflow: scrollOverflow,
				afterLoad: function(anchorLink, index){

					var sectionHeaderColor = $($section[index-1]).attr('data-header-color');
					var color = 'grve-' + sectionHeaderColor;

					$section.find('.fp-tableCell').css('visibility','visible');

					// Set Header Color
					if( !$('#grve-main-header').hasClass('grve-header-side') ) {
						$('#grve-main-header').removeClass('grve-light grve-dark').addClass(color);
					}
					$('#fp-nav').removeClass('grve-light grve-dark').addClass(color);

					GRVE.scrollingPageAnimations.addAnim( $section, index );
				},
				afterRender: function(){

					$('.grve-bg-video').each(function(){
						var $that = $(this),
							$video = $that.find('video');
						if( $video.length ){
							$video[0].play();
						}
						GRVE.pageSettings.resizeVideoBgElement( $that );
					});

				},
				onLeave: function(index){
					if( !isMobile.any() ) {
						GRVE.scrollingPageAnimations.removeAnim( $section, index, speed );
					}
				}
			});

			$(window).on('grve_open_hidden_area', function(){
				$.fn.fullpage.setFitToSection(false);
				$.fn.fullpage.setAutoScrolling(false);
				$('html, body').scrollTop(0);
			});
			$(window).on('grve_close_hidden_area', function(){
				if( isMobile.any() && deviceFullPageEnable ) {
					$.fn.fullpage.setFitToSection(true);
					$.fn.fullpage.setAutoScrolling(true);
				}
				$.fn.fullpage.silentMoveTo('firstSlide');
			});

		}
	};

	// # Pilling Page
	// ============================================================================= //
	GRVE.pillingPage = {
		init: function(){
			var $fPage = $('#grve-pilling-page');
			if( !$fPage.length > 0 ) return;
				var $section = $fPage.find('.grve-row-section');
				var deviceFullPageEnable = $fPage.data('device-scrolling') == 'yes' ? true : false;
				var lockAnchors = $fPage.data('lock-anchors') == 'yes' ? true : false;
				var direction = $fPage.data('scroll-direction');
				var loop = $fPage.data('scroll-loop');
				var speed = $fPage.data('scroll-speed');
				var loopTop = false;
				var loopBottom = false;
				if ( 'both' == loop || 'top' == loop ) {
					loopTop = true;
				}
				if ( 'both' == loop || 'bottom' == loop ) {
					loopBottom = true;
				}

				if( isMobile.any() && !deviceFullPageEnable ) {
					$fPage.addClass('grve-disable-on-device');
					$section.find('.grve-animated-item').addClass('grve-animated');
					$section.children().wrap('<div class="pp-tableCell"></div>');
					$('.grve-row-section').each(function(){
						if ( $(this).attr('data-anchor').length ) {
							$(this).attr('id',  $(this).attr('data-anchor') );
						}
					});
					return;
				}

				var navigationAnchorTooltips = $('[data-anchor-tooltip]').map(function(){
					return $(this).data('anchor-tooltip').toString();
				}).get();


				var navigationAnchors = [];
				if ( !lockAnchors ) {
					navigationAnchors  = $('[data-anchor]').map(function(){
						return $(this).data('anchor').toString();
					}).get();
				}

				$('html').addClass('fp-enabled');


			$fPage.pagepiling({
				sectionSelector: $section,
				css3: true,
				scrollingSpeed: speed,
				anchors: navigationAnchors,
				direction: direction,
				lockAnchors : lockAnchors,
				loopTop : loopTop,
				loopBottom : loopBottom,
				navigation: {
					'tooltips': navigationAnchorTooltips
				},
				afterLoad: function(anchorLink, index){

					var sectionHeaderColor = $($section[index-1]).attr('data-header-color');
					var color = 'grve-' + sectionHeaderColor;
					// Set Header Color
					if( !$('#grve-main-header').hasClass('grve-header-side') ) {
						$('#grve-main-header').removeClass('grve-light grve-dark').addClass(color);
					}
					$('#pp-nav').removeClass('grve-light grve-dark').addClass(color);

					GRVE.scrollingPageAnimations.addAnim( $section, index );
				},
				afterRender: function(){
					var sectionHeaderColor = $($section[0]).attr('data-header-color');
					var color = 'grve-' + sectionHeaderColor;

					$('.grve-bg-video').each(function(){
						var $that = $(this),
							$video = $that.find('video');
						if( $video.length ){
							$video[0].play();
						}
						GRVE.pageSettings.resizeVideoBgElement( $that );
					});
					// Set Header Color
					if( !$('#grve-main-header').hasClass('grve-header-side') ) {
						$('#grve-main-header').removeClass('grve-light grve-dark').addClass(color);
					}
					$('#pp-nav').removeClass('grve-light grve-dark').addClass(color);

					if( $section.find('.grve-isotope').length ) {
						GRVE.isotope.init();
					}

					GRVE.scrollingPageAnimations.addAnim( $section, 1 );
				},
				onLeave: function(index){
					GRVE.scrollingPageAnimations.removeAnim( $section, index, speed );
				}
			});
		}
	};

	// # Scrolling Page Animations
	// ============================================================================= //
	GRVE.scrollingPageAnimations = {
		addAnim: function( section, index ){
			var $section = $(section[index-1]),
				$element = $section.find('.grve-animated-item'),
				$column = $section.find('.grve-clipping-animation');

			$element.each(function(){
				var $that = $(this),
					delay = $that.data('delay');
				if( $that.parents('.grve-clipping-animation').length ) return;
				setTimeout(function(){
					$that.addClass('grve-animated');
				},delay);
			});

			$column.each(function(){
				var $that = $(this),
					$element = $that.find('.grve-animated-item'),
					delay = $that.data('delay');
				setTimeout(function(){
					GRVE.pageSettings.clippingAnimated( $that );
					setTimeout(function(){
						$element.addClass('grve-animated');
					},700);
				},delay);
			});


		},
		removeAnim: function(section, index, speed){
			var $section = $(section[index-1]),
				$element = $section.find('.grve-animated-item');
			setTimeout(function(){
				$element.removeClass('grve-animated');
			},speed);
		}
	};

	// # Global Variables
	// ============================================================================= //
	var bodyLoader = false;
	var largeScreen = 2048;
	var tabletLandscape = 1200;
	var tabletPortrait = 1023;
	var mobileScreen = 767;
	var lastScrollTop = 0;
	var wpBarHeight = $('#grve-body').hasClass('admin-bar') ? 32 : 0;
	var $videoBg = $('.grve-bg-video');
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// Animation support & prefixing
	var t = document.body || document.documentElement;
	var s = t.style;
	var tSupport = s.transition !== undefined || s.WebkitTransition !== undefined || s.MozTransition !== undefined || s.MsTransition !== undefined || s.OTransition !== undefined;
	var property = [ 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ];
	var prefix;
	for( var i in property ){
		if( s[ property[ i ] ] !== undefined ){
			prefix = '-' + property[ i ].replace( 'Transform', '' ).toLowerCase();
		}
	}
	var transform = prefix + '-transform';

	// # Scrollbar Width
	// ============================================================================= //
	var parent, child, scrollBarWidth;

	if( scrollBarWidth === undefined ) {
		parent          = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
		child           = parent.children();
		scrollBarWidth  = child.innerWidth()-child.height(99).innerWidth();
		parent.remove();
	}

	$(document).ready(function(){ GRVE.documentReady.init(); });
	$(window).smartresize(function(){ GRVE.documentResize.init(); });
	$(window).on('load',function () { GRVE.documentLoad.init(); });
	$(window).on('scroll', function() { GRVE.documentScroll.init(); });

})(jQuery);