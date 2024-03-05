document.addEventListener('DOMContentLoaded', function() {

  // Add event listener to the header
  document.querySelector('header').addEventListener('click', function() {
    // Redirect to the home page URL
    window.location.href = 'https://alq5630.github.io/MCCCMassageTherapy/';
  });

  window.onload = function() {
    // Load default content (image) when the page loads
    loadMainContent('<img src="https://cdn.britannica.com/07/192107-050-CE043374/anatomy-charts-human-body-muscle-systems-skeletal.jpg" id="mainImage">');
    resizeImage(); // Call function to resize the image

    // Event listener for link1
    document.getElementById('link1').addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default behavior of the link

      // Hide the sidebar
      var sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';

      // Load content for link1
      loadSidebarContent('');
      loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSddbmanBZraC7Bw3vAI392YhWfhyLOBtsMxq7zHtbdyvkloEYD4h0eS4bF3o0pkqLX1fC9GAvP7ym-/pub?embedded=true" width="100%" height="600px"></iframe>');
    });

    // Event listener for link2
    document.getElementById('link2').addEventListener('click', function(e) {
      e.preventDefault();

      // Theory Exam #1
      // Declare the sidebarContent variable
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
      sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
      sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
      sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
      sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
      sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
      sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
      sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
      sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
      sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
      sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
      sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
      sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
      sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
      sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
      sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Anatomical Positions</a><br>';
      sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
      sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
      sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
      sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
      sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
      sidebarContent += '<h2 id="studyGuideLink">Study Guide</h2>';
      sidebarContent += '<a href="#" id="studyGuide">Study Guide</a><br>';

      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://www.bigskymassages.com/uploads/1/3/0/6/130677665/massage1_orig.jpg" id="mainImage">');

      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions = document.getElementById('powerPointsOptions');
        powerPointsOptions.style.display = 'block';
      });

      // Event listener for Handouts link
      document.getElementById('handoutsLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Handouts options
        var handoutsOptions = document.getElementById('handoutsOptions');
        handoutsOptions.style.display = 'block';
      });

      // Add event listener for Note Guides link
      document.getElementById('noteGuidesLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Note Guides options
        var noteGuidesOptions = document.getElementById('noteGuidesOptions');
        noteGuidesOptions.style.display = 'block';
      });

      // Add event listener for Practice Quizzes
      document.getElementById('practiceQuizzesLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var practiceQuizzesOptions = document.getElementById('practiceQuizzesOptions');
        practiceQuizzesOptions.style.display = 'block';
      });

      // Add event listener for Study Guides
      document.getElementById('studyGuideLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var studyGuideOptions = document.getElementById('studyGuideOptions');
        studyGuideOptions.style.display = 'block';
      });


      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter3Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQasClFopnaZ3qSPMDUgcNj3h5iFxIJI-8XZkXOLVccsytUdVPrfTQj9MSoqNl4gg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter8Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ4mKVqRMZghmt-gd9HUXQ7iau_KIzmft5OjmK9cNS4byIBQBLdVCq9kWKc1Qcaug/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter7Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSt0gUF7jULT5SEz-1oZkIZ3LRVDC9ed6NNhq64Ryy5RfjjpPHWTwRDLA2DfhZkiQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter9Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT9UgZi5opZST13raOnLqZDBKcZuhHRJJLfGIqePClI74R0b3XWq_MQ6Y7_x-kEpg/embed?start=true&loop=false&delayms=5000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });



      // Event Listeners for Handouts
      document.getElementById('massageTerminology').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTNb6pRrRXlvhiBAbX-acrtwu3XSEhy75RH0ygnJobS29fKu84E-szQuaR0SL5bPlZxJATGUwQZrh6f/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('fiveStrokes').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vT1kdsm6jVbwfhaWY1Verf1gyqYHOqH9UgrJFdf1FU_CldFnnDWR0YBJCGsFhHz-w/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('endangermentSites').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTI6Sc00BSkhS7mHx0pAlzMgXXrGCP5WfB40aMTf_gs5MlIqmQfnAGc905YmUtSYGbFVvmCCOl27jpT/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });


      // Event listeners for Chapter Note Guides
      document.getElementById('directionalTerms').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQbCEkRYLY83Y0P9DZNTP9tpG9_SXteP5UQO8xdoYBkM157N7vPCjkrQ4lYffMT_m2--ErAr8XxvoUd/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter3Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQVskFFSSDjyl5TuZrcct0I1uLJAcMNYhw7GdIQZJL04GT02lVpkJbKFRgDH7Lw0bdYo5-M7BAYIw27/pub?embedded=true" frameborder="0" width="100%" height="12000px"></iframe>');
      });

      document.getElementById('chapter8Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRX11qNZkwFbYZD9AGCwgZvy0qigGZjP5PAfiu7fukwOCzmbYJBT5MpFm2tb_fSZ5Bn9FtdnaJEpReS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter7Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSZ5P3A9FFPaVhCRezVIGvsC7TJVCxcz3rG3iXKXE_KLAWla17ZTqBpJ16KBOxwCejuVWEVOpVs4qJ6/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter9Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSWbu2y22BTQOXuh4gwlTQOecu5MzGCgjJJTf9ivHYllNZmC-BBYZiC1ZGnCUDw_T8BLvc1fX4leuxQ/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });


      // Event listeners for Practice Quizzes
      document.getElementById('directionalTermsPq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRIOnn4_E_5SWYHt977LVbxFLSpJ48BbDDOTa4k_1UHN-_T5emAuNHl78sOw_dCU8bdtHw5LkZ0nT47/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('muscleConceptsPq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQRVfjeHzoY1tj1Lp8W7GVUaS254umftgTxfGvL8Sj8wwNar_WP0i66S6HnCTue0DZwYYVD_HBKNJf5/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter3Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRtSuNgvaKq4SKEvU42tIEBZeMM0CO06K4Mx8mC2xpXx9m2lymoU1WcH1cDzqhRtaLO720iiXsnRHrB/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter8Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTGp-Y62PXPY1FKYpuBKl0K77GIOrovYMV63Io_NmJFisA5oeGhtTjrWX_V1EHADL7G2WNlBNHQUA-b/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter7Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSc0wSFADrfvm3N4fDsdC7fU6_6ytZrU-CwOTBWb0cofXA0y1lk-Al_zmM12OwRAVPG0EbNS6Fxg8YV/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });

      document.getElementById('chapter9Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRuaYeXTjX0Ie7vCAC58TSDnFqMy_UketfT_kdOcKIRbfjPsyDkcOLNrnq_fNut33B1HrFD4ylQf_bS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });


      // Event Listener for Study Guide
      document.getElementById('studyGuide').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSOlZxvWYYcZCz78VcBDNd-Tu1N5SKAjTrQ3iJcbAHR3flriE2jSbYERy6O6WVq6w/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
    });



    // Event listener for link3
    document.getElementById('link3').addEventListener('click', function(e) {
      e.preventDefault();

      // Theory Exam #2
      // Declare the sidebarContent variable
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink2">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter6Link">Chapter 6: Massage Therapy and Research</a><br>';
      sidebarContent += '<a href="#" id="chapter10Link">Chapter 10: Treatment Planning and Intake</a><br>';
      sidebarContent += '<a href="#" id="footReflexology">Foot Reflexology</a><br>';
      sidebarContent += '<h2 id="handoutsLink2">Handouts</h2>';
      sidebarContent += '<a href="#" id="massageEffects">Effects of Massage</a><br>';
      sidebarContent += '<a href="#" id="footMap">Reflexology Foot Maps</a><br>';
      sidebarContent += '<h2 id="noteGuidesLink2">Note Guides</h2><br>';
      sidebarContent += '<a href="#" id="chapter6Note">Chapter 6: Massage Therapy and Research</a><br>';
      sidebarContent += '<a href="#" id="chapter10Note">Chapter 10: Treatment Planning and Intake</a><br>';
      sidebarContent += '<h2 id="practiceQuizzesLink2">Practice Quizzes</h2>';
      sidebarContent += '<a href="#" id="chapter6Pq">Chapter 6: Massage Therapy and Research</a><br>';
      sidebarContent += '<a href="#" id="chapter10Pq">Chapter 10: Treatment Planning and Intake</a><br>';
      sidebarContent += '<h2 id="studyGuideLink2">Study Guide</h2>';
      sidebarContent += '<a href="#" id="studyGuide2">Study Guide</a><br>';

      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink2').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions2 = document.getElementById('powerPointsOptions2');
        powerPointsOptions2.style.display = 'block';
      });

      // Event listener for Handouts link
      document.getElementById('handoutsLink2').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Handouts options
        var handoutsOptions2 = document.getElementById('handoutsOptions2');
        handoutsOptions2.style.display = 'block';
      });

      // Add event listener for Note Guides link
      document.getElementById('noteGuidesLink2').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Note Guides options
        var noteGuidesOptions2 = document.getElementById('noteGuidesOptions2');
        noteGuidesOptions2.style.display = 'block';
      });

      // Add event listener for Practice Quizzes
      document.getElementById('practiceQuizzesLink2').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var practiceQuizzesOptions2 = document.getElementById('practiceQuizzesOptions2');
        practiceQuizzesOptions2.style.display = 'block';
      });

      // Add event listener for Study Guides
      document.getElementById('studyGuideLink2').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var studyGuideOptions2 = document.getElementById('studyGuideOptions2');
        studyGuideOptions2.style.display = 'block';
      });

      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter6Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS03kWD3VE0LOj4qYhwpe6NLL_61ycu9EokHjTSM0t43cxUHsm_SaT1iL6oMm4fag/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter10Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTURr4_9AMbtyIG2uNkURTedKYi5uN7JJQ6Yh8v7hifUubgvj3WdD4UDuwiUPguzA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('footReflexology').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSjdoEKKMCakh2ne_K6y3NBxNSnF4ENgpaYfLO-lLTzFZWa2ELKHZHydO1_MHd3aw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event Listeners for Handouts
      document.getElementById('massageEffects').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRCgxGiCbQ2Eoca4PaNu6sYH2jWnExSydx10i8glRkI1-bmrTrebrwHHwei_FqOHg/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('footMap').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSIrJiuAibu0H2ss9gQKZdukmeKBYf0OZm_BRpTUjmV_m_rr6k3vNSI-zfELR8Tf_k-wuvR-CvMdP59/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event listeners for Note Guides
      document.getElementById('chapter6Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQine6rjqqE3EilTVLY6BzThC9wrzNwbtYuVxrGIXh5FPnxvoyePzuIS9jyQhZrMJHJqI1hjX_eu01O/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter10Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQjgC07zI26iyi-CXh1SLAMTfojeJf2GrThFd3LOlUVH1GRwL7LOQR6i1zOrmgIzxC617FKmnWuPNIW/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event listeners for Practice Quizzes
      document.getElementById('chapter6Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSCJu--18OIJZVUB9qvWvW5m9tKsyKT0S4lm_xZfrJDOF9HPGLhImWRMOn6EDFitr18ASSx1r6co8lT/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter10Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vS8N5pPvZek6bOuHgHtvmOypGZsRrycjduGFwrjOX4JI99HwuG9Di3Uv_PXOlST7qleJy4LFQexF6u_/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event Listener for Study Guide
      document.getElementById('studyGuide2').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTNvaEARI7r7id1Zpz8HArSB4qwi_FFLx4sdPIRsoLgf086TKsEI276ItIYdBswxla8nGAnPGp5ZBOF/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
    });

    //Theory Exam#3
    // Event listener for link4
    document.getElementById('link4').addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();

      // Define sidebar content
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink3">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter3Path">Mosby’s Pathology - Chapter 3: Pharmacology</a><br>';
      sidebarContent += '<a href="#" id="chapter2Link">Chapter 2: The Therapeutic Relationship</a><br>';
      sidebarContent += '<a href="#" id="chapter1Link">Chapter 1: The History of Massage</a><br>';

      sidebarContent += '<h2 id="noteGuidesLink3">Note Guides</h2><br>';
      sidebarContent += '<a href="#" id="chapter3PathNote">Mosby’s Pathology - Chapter 3: Pharmacology</a><br>';
      sidebarContent += '<a href="#" id="chapter2Note">Chapter 2: The Therapeutic Relationship</a><br>';

      sidebarContent += '<h2 id="practiceQuizzesLink3">Practice Quizzes</h2>';
      sidebarContent += '<a href="#" id="chapter3PathPq">Mosby’s Pathology - Chapter 3: Pharmacology</a><br>';
      sidebarContent += '<a href="#" id="chapter2Pq">Chapter 2: The Therapeutic Relationship</a><br>';
      sidebarContent += '<a href="#" id="chapter1Pq">Chapter 1: The History of Massage</a><br>';

      sidebarContent += '<h2 id="studyGuideLink3">Study Guide</h2>';
      sidebarContent += '<a href="#" id="studyGuide3">Study Guide</a><br>';

      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink3').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions3 = document.getElementById('powerPointsOptions3');
        powerPointsOptions3.style.display = 'block';
      });

      // Add event listener for Note Guides link
      document.getElementById('noteGuidesLink3').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Note Guides options
        var noteGuidesOptions3 = document.getElementById('noteGuidesOptions3');
        noteGuidesOptions3.style.display = 'block';
      });

      // Add event listener for Practice Quizzes
      document.getElementById('practiceQuizzesLink3').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var practiceQuizzesOptions3 = document.getElementById('practiceQuizzesOptions3');
        practiceQuizzesOptions3.style.display = 'block';
      });

      // Add event listener for Study Guides
      document.getElementById('studyGuideLink3').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Study Guide options
        var studyGuideOptions3 = document.getElementById('studyGuideOptions3');
        studyGuideOptions3.style.display = 'block';
      });

      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter3Path').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR83zqxl2Iqj0IYlZorWXjRz4SgULiYwbjoqznb_D4JafzJPCq2fnLJWSWYUDpNKw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter2Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTnsEYuS8Rs4P4kYrEH3I8VZQjKASnULvpVAMlVY_umOkvfTmt-UMze7ee4udGP_A/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter1Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSmOHWY89gzQRgk5zZR-6m3BvGOzbn9w06dhOQE1kZVgMkCzKeV0FPBAKRKU1QrfA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event listeners for Note Guides
      document.getElementById('chapter3PathNote').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRJLE5JIZG8T7MTo75ERFtrs6YYnxZZgfotR5lOi5L2zxLVjpj8MifKYGwbDfJd3RmoGI6bPbQUTYXw/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter2Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRzgytML8v3jeVgu0_aFRpD5tHjPCRwzMxIDc8b0J9oXsndG3jNZu_RSso5zrNJUKt11gMrBzmP_mKw/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event listeners for Practice Quizzes
      document.getElementById('chapter3PathPq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTkRtkMfhFfq0xo3IIf2MA7UVZO71mNdse6tkliYYMBpKvvOjiN7zQWv5tBbR_iOk4ATCM4aDLOqKuX/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter2Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTMo736F9bamgkwPmhrWA_xY5EiCXROrR1utMuvg1AFZcCDh-WnAacpW-hBE0_9HdwPgHFXt9U2Qkzx/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter1Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRoyCwZzZEsByFYKi7R-MlwEY7N1fsFw-YahvmJuAChUU04uaNfRb8m3sE0W4Y2jbpW43aMa2x4QL8A/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event Listener for Study Guide
      document.getElementById('studyGuide3').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vResxShHVRYD-nuBNdqxbFcrM-RxD_GCrro4tZuVdFppAG5i_9ZZ_uqz4bXnyVFBBKuRaEJMKZkyP_f/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
    });



    //Medical Massage
    // Event listener for link5
    document.getElementById('link5').addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();

      // Define sidebar content
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink4">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter14Link">Chapter 14: Clinical Massage - Pain, Fascia, and Orthopedic Assessments</a><br>';
      sidebarContent += '<h2 id="noteGuidesLink4">Note Guides</h2><br>';
      sidebarContent += '<a href="#" id="chapter14Note">Medical Massage Worksheet</a><br>';


      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink4').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions4 = document.getElementById('powerPointsOptions4');
        powerPointsOptions4.style.display = 'block';
      });

      // Add event listener for Note Guides link
      document.getElementById('noteGuidesLink4').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Note Guides options
        var noteGuidesOptions4 = document.getElementById('noteGuidesOptions4');
        noteGuidesOptions4.style.display = 'block';
      });

      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter14Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRVshA6Q_IShMaJ4W46h16nfxxkvALABud2BeyYQhQkaTP-oqqhLHeRGqynOjAKAA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>>');
      });

      // Event listeners for Note Guides
      document.getElementById('chapter14Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTgG5ex3D-M9raB6xOeO4rm8XfEzhlQIPtgbUgL5gLPhOFXY8hGZcMqrdVbAP4z5V6OQZmwFbEsFlVf/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
    });


    //Modalities
    // Event listener for link6
    document.getElementById('link6').addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();

      // Define sidebar content
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink5">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter15Link">Chapter 15: Seated Massage</a><br>';
      sidebarContent += '<a href="#" id="jointMobilizations">Joint Mobilizations and Stretching</a><br>';
      sidebarContent += '<a href="#" id="chapter11Link">Chapter 11: Special Populations</a><br>';
      sidebarContent += '<a href="#" id="asianBodywork">Asian Bodywork Therapy</a><br>';
      sidebarContent += '<a href="#" id="sportsMassage">Sports Massage</a><br>';

      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink5').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions5 = document.getElementById('powerPointsOptions5');
        powerPointsOptions5.style.display = 'block';
      });

      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter15Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTi6eLdGBJYVzr0Utq5Z1thLppQ6h48raQuuOQe4tvVzqSDuw2lLhKhlM-iptkNlA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('jointMobilizations').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ-oNm1qzNprZQPe8CHAj4lAttuSzYD-XM0tlYwoCwT5bkdDZma7xhYNHNQlCx3coaZA2W0KBuSEv20/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('chapter11Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSOMumPfguTUmoKQY9vExoDoCcZf7CzkFypJF7ZBkxVbZHSAb4AEu-ZGGjJcPvVug/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('asianBodywork').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQj0Na6F5ceVTxNiANdTr70cJq8Om4J5eay0PU-guXVbTk4f3YeST_WTEv4HUtXtA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('sportsMassage').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR9-RKIahpvqzvlSNJLVoYABD8b5xOUYP7YqGVQGdXPXK_NkA3tfEjndiqfdnoJnbR3H5hTegmaWRh1/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

    });



    //Business Section
    // Event listener for link7
    document.getElementById('link7').addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();

      // Define sidebar content
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink6">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter17Link">Chapter 17: Business Practices</a><br>';

      sidebarContent += '<h2 id="noteGuidesLink6">Note Guides</h2><br>';
      sidebarContent += '<a href="#" id="chapter17Note">Chapter 17: Business Practices</a><br>';

      sidebarContent += '<h2 id="practiceQuizzesLink6">Practice Quizzes</h2>';
      sidebarContent += '<a href="#" id="chapter17Pq">Chapter 17: Business Practices</a><br>';


      sidebarContent += '<h2 id="businessProject">Business Project</h2>';
      sidebarContent += '<a href="#" id="businessOutline">Business Plan Outline</a><br>';
      sidebarContent += '<a href="#" id="businessExample">Business Project Example</a><br>';
      sidebarContent += '<a href="#" id="businessFinancial">Business Project Financial Sheets</a><br>';

      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink6').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions6 = document.getElementById('powerPointsOptions6');
        powerPointsOptions6.style.display = 'block';
      });

      // Add event listener for Note Guides link
      document.getElementById('noteGuidesLink6').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Note Guides options
        var noteGuidesOptions6 = document.getElementById('noteGuidesOptions6');
        noteGuidesOptions6.style.display = 'block';
      });

      // Add event listener for Practice Quizzes
      document.getElementById('practiceQuizzesLink6').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var practiceQuizzesOptions6 = document.getElementById('practiceQuizzesOptions6');
        practiceQuizzesOptions6.style.display = 'block';
      });

      // Add event listener for Business Project
      document.getElementById('businessProject').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Business Project options
        var businessProjectOptions = document.getElementById('businessProjectOptions');
        businessProjectOptions.style.display = 'block';
      });


      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter17Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS2hW0X6RUJnlfTKirJ7DVkG3hyKlNB9md3lTOjRjUTtl5LPKVtyckivkWkMP2RrA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });


      // Event listeners for Note Guides
      document.getElementById('chapter17Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vR96uGIb85dgJLUki3oqab0O4-EzEBBwUTTuMY-KHpw7DOCtI-qwD959HZz-8ZeMD5RoyvtMTWoQyYP/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event listeners for Practice Quizzes
      document.getElementById('chapter17Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTHMMX3xKSOWhTv0KEnfOCXHg_rYhrTYFKKvuYh2Lm6DqJSf9dwlK2FXRZa_0SBQZ9GbY3FjcNHZoCR/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      // Event Listener for Business Project
      document.getElementById('businessOutline').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSWZZCVh79O84fnIt8V_3BHJgV_vM9IEasEZEFrETuAKcd5LdH28el6KyEHz_egncN3Wc8l2eGHaJWi/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('businessExample').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTPmQWlWfbZYlxpelEJzXI2K5ORORoDPyBESMa27TvtXS6jL-1bDsWbP7ul194JhIlmr0RXwJEiTw7E/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('businessFinancial').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPyYtbywpE6TAbUrlj76almpa8mQnnEBhffAVWbEtTCV-Hx9DJulrWssJzFc229aJYp0lJUeWpw9Ic/pubhtml?widget=true&amp;headers=false" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
    });


    //Massage Routine
    // Event listener for link8
    document.getElementById('link8').addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();

      // Define sidebar content
      var sidebarContent = '';
      sidebarContent += '<h2 id="massageRoutine">Massage Routine</h2>';
      sidebarContent += '<a href="#" id="backRoutine">Back Routine</a><br>';
      sidebarContent += '<a href="#" id="postLegs">Posterior Legs</a><br>';
      sidebarContent += '<a href="#" id="faceNeckChest">Face, Neck and Chest</a><br>';
      sidebarContent += '<a href="#" id="handsArms">Hands and Arms</a><br>';
      sidebarContent += '<a href="#" id="abdominals">Abdominals</a><br>';
      sidebarContent += '<a href="#" id="antLegsFeet">Anterior Legs and Feet</a><br>';


      sidebarContent += '<h2 id="massageDemo">Massage Routine Demos</h2><br>';
      sidebarContent += '<a href="#" id="upperBack">Upper Back</a><br>';
      sidebarContent += '<a href="#" id="lowBack1">Lower Back: Part One</a><br>';
      sidebarContent += '<a href="#" id="lowBack2">Lower Back: Part Two</a><br>';
      sidebarContent += '<a href="#" id="postLegDemo">Posterior Legs</a><br>';
      sidebarContent += '<a href="#" id="face">Face</a><br>';
      sidebarContent += '<a href="#" id="neckChest1">Neck and Chest: Part One</a><br>';
      sidebarContent += '<a href="#" id="neckChest2">Neck and Chest: Part Two</a><br>';
      sidebarContent += '<a href="#" id="armsAbs">Arms and Abdominals</a><br>';


      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Event listener for Massage Routine
      document.getElementById('massageRoutine').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Massage Routine options
        var massageRoutineOptions = document.getElementById('massageRoutineOptions');
        massageRoutineOptions.style.display = 'block';
      });

      // Event listener for Massage Demo
      document.getElementById('massageDemo').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Massage Demo options
        var massageDemoOptions = document.getElementById('massageDemoOptions');
        massageDemoOptions.style.display = 'block';
      });


      // Event listeners for Massage Routine Handouts
      document.getElementById('backRoutine').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQBN7p36M1n4DfENHD_IBEzzvtBGm0xdtcRCT0CpoA9dV2r_uFG__kfr4wOZ3WJVQ/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('postLegs').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTZE94-ELWHmSqJmuvrAPZb7wF2z1IlWyxXH_MTAnTrvQMc8D5hztCfUzz1y9PATg/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('faceNeckChest').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQ8s-VY16hRr8tqjku5eXPFyL62Hvx1NYGe8v51T2DFSiohjaqFfL7FleEau8jRTDYfiRznsJWJR04E/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('handsArms').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vT29fIoUPBvnSr9_A2Ld9fvzIgjj228siUrKLIRSUS-t3CxkBf4NNEhsHX9UNb9SJDiSys9NvspfJKR/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('abdominals').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTzGyv4LwbSIzzwazTkaoTBmfXg73ba30Bp0LQsLIDEAC3bA2xQyWQz2ivNJvFfarHiOyKCPLqkQ2Ej/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });

      document.getElementById('antLegsFeet').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQY5g2EThJZ9ulbzm-o373GTjvoh4NsCHHXLLVTpA-kz1J6cJjkUjzKE7yj1TtXKnqLxMVqf7gNXmxB/pub?embedded=true" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });


      // Event listeners for Massage Routine Demo Videos
      document.getElementById('upperBack').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/xfilI1pNiDo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('lowBack1').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/XPzr_B7rrPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('lowBack2').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/Fc0XrmryGwE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('postLegDemo').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/7nhJutXQA6Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('face').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/vui-gx7MGtg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('neckChest1').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/K1xWPs9BNQg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('neckChest2').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/0J0TroMetZw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });

      document.getElementById('armsAbs').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="749" src="https://www.youtube.com/embed/3kqSeyn6WrA?si=F4zwojVNYnfvdhL-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      });

    });

    //Muscles
    // Event listener for link9
    document.getElementById('link9').addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();

      // Define sidebar content
      var sidebarContent = '';
      sidebarContent += '<h2 id="musclePPT">PowerPoint</h2>';
      sidebarContent += '<a href="#" id="muscles">Muscles</a><br>';

      sidebarContent += '<h2 id="muscleMeds">Muscle Meditations</h2><br>';
      sidebarContent += '<a href="#" id="med1">Infraspinatus, Supraspinatus, Subscapularis, Teres Major and Minor</a><br>';
      sidebarContent += '<a href="#" id="med2">Rhomboids, Levator, and Serratus Posterior</a><br>';
      sidebarContent += '<a href="#" id="med3">Traps, Lats, and Serratus Anterior</a><br>';
      sidebarContent += '<a href="#" id="med4">QL’s and Longissimus</a><br>';



      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');

      // Event listener for Muscle PowerPoint
      document.getElementById('musclePPT').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the options
        var musclePPTOptions = document.getElementById('musclePPTOptions');
        musclePPTOptions.style.display = 'block';
      });

      // Event listener for Muscle Meditations
      document.getElementById('muscleMeds').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the options
        var muscleMedsOptions = document.getElementById('muscleMedsOptions');
        muscleMedsOptions.style.display = 'block';
      });


      // Event listeners for Muscle PowerPoint
      document.getElementById('muscles').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQQbwKB9OelVegXuNU_MXdXpDfvntRfkbyxctCg_zXT_jzVAA9X-dDtHLcbm0pOXHKE8I5L8AzjdmZD/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });


      // Event listeners for Muscle Meditations
      document.getElementById('med1').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="540" src="https://voicethread.com/app/player/?threadId=27277196" frameborder="0" allowusermedia allowfullscreen allow="camera https://voicethread.com; microphone https://voicethread.com; fullscreen https://voicethread.com;"></iframe>');
      });

      document.getElementById('med2').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="540" src="https://voicethread.com/app/player/?threadId=27277211" frameborder="0" allowusermedia allowfullscreen allow="camera https://voicethread.com; microphone https://voicethread.com; fullscreen https://voicethread.com;"></iframe>');
      });

      document.getElementById('med3').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="540" src="https://voicethread.com/app/player/?threadId=27277216" frameborder="0" allowusermedia allowfullscreen allow="camera https://voicethread.com; microphone https://voicethread.com; fullscreen https://voicethread.com;"></iframe>');
      });

      document.getElementById('med4').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe width="960" height="540" src="https://voicethread.com/app/player/?threadId=27277219" frameborder="0" allowusermedia allowfullscreen allow="camera https://voicethread.com; microphone https://voicethread.com; fullscreen https://voicethread.com;"></iframe>');
      });
    });







    // Function to resize the image
    function resizeImage() {
      var img = document.getElementById('mainImage');
      img.style.width = 'auto'; // Set width of the image
      img.style.height = 'auto'; // Maintain aspect ratio
    }

    // Function to load content into sidebar
    function loadSidebarContent(content) {
      var sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'block'; // Show the sidebar
      sidebar.innerHTML = content;
    }

    // Function to load content into main content
    function loadMainContent(content) {
      document.querySelector('.content').innerHTML = content;
    }
  };

});
