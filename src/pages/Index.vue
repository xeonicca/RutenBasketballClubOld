<template>
  <main>
    <!-- Navigation Mobile type 1 -->

    <a href="#" class="open_menu bg-light radius_full"><i class="fas fa-bars lh-40"></i></a>
    <div class="navigation_mobile type1">
      <a href="#" class="close_menu color-white"><i class="fas fa-times"></i></a>
      <div class="px-40 pt-60 pb-60 inner">
        <div class="f-18 logo color-white mb-30">{{ $static.metaData.siteName }}</div>
          <div><g-link class="f-heading f-15 link color-white mb-20" to="/">首頁</g-link></div>
          <div><g-link class="f-heading f-15 link color-white mb-20" to="/about">關於</g-link></div>
          <div><g-link class="f-heading f-15 link color-white mb-20" to="/teams">隊伍</g-link></div>
          <div><g-link class="f-heading f-15 link color-white mb-20" to="/games">比賽</g-link></div>

          <!-- <div><a href="#" class="link color-white op-3 mb-15">Help</a></div>
          <div><a href="#" class="link color-white op-3 mb-15">F.A.Q.</a></div>
          <div><a href="#" class="link color-white op-3 mb-15">Support</a></div>
          <div><a href="#" class="link color-white op-3 mb-15">About Us</a></div>
          <div><a href="#" class="link color-white op-3 mb-15">Blog</a></div>
          <div><a href="#" class="link color-white op-3 mb-15">Careers</a></div> -->

          <!-- <div class="socials mt-40">
            <a href="#" target="_blank" class="link color-white f-18 mr-20"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank" class="link color-white f-18 mr-20"><i class="fab fa-facebook"></i></a>
            <a href="#" target="_blank" class="link color-white f-18 mr-20"><i class="fab fa-google-plus-g"></i></a>
          </div> -->

        <div class="mt-50 f-14 light color-white op-7 copy">&copy; 2019 Designmodo. All rights reserved.</div>
      </div>
    </div>
    <!-- Header 17 -->

    <header class="pt-175 pb-105 bg-dark header_17">

      <!-- Header Menu 17 -->
      <nav class="header_menu_17 pt-30 pb-30 mt-35">
        <div class="container px-xl-0">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="row justify-content-between align-items-center">
                <div class="col-lg-6" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="450">
                  <div class="logo color-white">{{ $static.metaData.siteName }}</div>
                </div>
                <div class="col-lg-6 d-flex justify-content-end align-items-center medium" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="600">
                  <g-link class="mx-20 link color-white" to="/about">關於</g-link>
                  <g-link class="mx-20 link color-white" to="/teams">隊伍</g-link>
                  <g-link class="mx-20 link color-white" to="/games">比賽回顧</g-link>
                  <!-- <a href="#" class="mx-20 link color-white">球員</a> -->
                  <a href="#" class="mx-20 link color-white"><i class="fab fa-facebook-square"></i></a>
                  <a href="#" class="ml-20 link color-white"><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="container mt-50 px-xl-0 color-white">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="row justify-content-center">
              <div class="mb-30 text-center" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="0">
                <h1 class="mb-3 logo d-block color-white logo_mobile">
                  <g-image class="img-fluid" src="~/assets/logo.png" />
                </h1>
                <div class="mt-50 mb-50 f-22 op-7 text-adaptive">
                  『教練……我好想打籃球！』
                </div>
                <div>
                  <div class="row justify-content-center" data-aos-duration="600" data-aos-delay="300">
                    <div class="col-5">
                      <g-link class="btn btn-block action-1" to="/teams">全部球隊</g-link>
                    </div>
                    <div class="col-5">
                      <g-link class="btn btn-block action-1" to="/games">比賽回顧</g-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
    <!-- Footer 7 -->


  </main>
</template>

<script>
export default {
  metaInfo: {
    title: '露天籃球社'
  },

  mounted() {
    window.$ = require('jquery')


    $(window).on('popstate',function(e){
      e.preventDefault();
      var target = window.location.href.split("#")[1];
      if(target != "" && target!=undefined && document.getElementById(target)!=null){
        $('html, body').stop().animate({'scrollTop': $("#"+target).offset().top}, 500, 'swing', function () {
          window.location.hash = target;
        });
      }
    });

    $(document).ready(function() {
      SF_scripts();
    });

    function SF_scripts(){

      $(window).resize(function(){
        showMenuBtn();
      });

      $(window).trigger("resize");

      // open menu on mobile

      function showMenuBtn(){
        if($(window).width()<1199.98){
          $(".open_menu").addClass("d-block");
          $("header nav").addClass("d-none");
          $(".navigation_mobile").removeClass("opened");
        }else{
          $(".open_menu").removeClass("d-block");
          $("header nav").removeClass("d-none");
          $(".navigation_mobile").removeClass("opened");
        }
      }

      $(".open_menu").click(function(event){
        event.preventDefault();
        $(".navigation_mobile").addClass("opened");
      });

      $(".close_menu, header, section, footer, .navigation_mobile .inner a").click(function(event){
        $(".navigation_mobile").removeClass("opened");
      });

      // Set | remove z-index for sections, that has dropdown

      function SF_dropdown_parent(dropdown){
        // Find dropdown's parent nav|header|section|footer
        var section = dropdown;
        var noBreak = true;
        while(noBreak){
          if(
            section[0].tagName=="NAV" ||
            section[0].tagName=="HEADER" ||
            section[0].tagName=="SECTION" ||
            section[0].tagName=="FOOTER" ||
            section[0].tagName=="BODY"
          ){
            noBreak = false;
            break;
          }else{
            section = section.parent();
          }
        }
        return section;
      }
      function SF_highest_zIndex(){
        // Find nav|header|section|footer with highest z-index on page
        var zIndex = 1;
        var currentzIndex;
        var section;
        $("nav, header, section, footer").each(function(){
          currentzIndex = parseInt($(this).css("z-index"));
          if(zIndex < currentzIndex){
            zIndex = currentzIndex;
            section = $(this);
          }
        });
        return [zIndex, section];
      }

      // Set highest z-index for section, that has opened dropdown
      $(".dropdown").on("show.bs.dropdown", function () {
        var section = SF_dropdown_parent($(this));
        section.css("z-index",SF_highest_zIndex()[0]+1);
      });

      // Remove z-index for section, where dropdown was closed
      $(".dropdown").on("hidden.bs.dropdown", function () {
        var section = SF_dropdown_parent($(this));
        section.css("z-index","auto");
      })

      // Navigation dropdown popup

      if($(".js-nav-dropdowns").length>0){
        $("body").click(function(event){
          if($(event.target).closest(".navigation_popup").length==0 && $(event.target).closest(".js-open-nav-dropdown").length==0){
            $(".navigation_popup.opened").removeClass("opened");
            $(".js-open-nav-dropdown i.fa-flip-vertical").removeClass("fa-flip-vertical");
          }
        });

        $(".js-nav-dropdowns .js-open-nav-dropdown").click(function(event){
          event.preventDefault();
          var id = $(".js-nav-dropdowns .js-open-nav-dropdown").index($(this));
          if($(".navigation_popup").eq(id).hasClass("opened")){
            $(this).find("i").removeClass("fa-flip-vertical");
            $(".navigation_popup").eq(id).removeClass("opened");
          }else{
            $(".navigation_popup.opened").removeClass("opened");
            $(".js-open-nav-dropdown i.fa-flip-vertical").removeClass("fa-flip-vertical");
            $(".navigation_popup").eq(id).addClass("opened");
            $(this).find("i").addClass("fa-flip-vertical");
            var section = SF_dropdown_parent($(this));
            section.css("z-index",SF_highest_zIndex()[0]+1);
          }
        });
      }

      // Enable AOS plugin (blocks animations)

      if(typeof(AOS) !== 'undefined' && $("body").hasClass("SFG_body")===false){
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50
        });
        setTimeout(function(){
          if($(".slick-initialized").length>0){
            AOS.refreshHard();
          }
        },200);
      }


      // Opening tabs

      function openTab(tab){
        if(tab.hasClass("opened")){
          $(".tab_text").animate({height:0},300);
          tab.removeClass("opened");
        }else{
          var nextTabHeight = tab.next().find("div").outerHeight(true);
          $(".tab_text").not(tab.next()).animate({height:0},300);
          tab.next().animate({height:nextTabHeight},300);
          $(".tab_opener").removeClass("opened");
          tab.addClass("opened");
        }
      }

      $(".tab_opener").click(function(){
        openTab($(this));
      });

      if($(".opening_tabs").length > 0){
        $(".tab_opener").each(function(){
          if($(this).hasClass("opened")){
            $(this).removeClass("opened").trigger("click");
          }
        });
      }

    }; // SF_scripts end
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  background-color: $bg_dark;
}
</style>