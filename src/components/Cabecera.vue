<template>
    <!-- start: header -->
<header class="header">
  <div class="logo-container">
    <a href="../" class="logo">
      <img src="assets/images/logo.png" height="35" alt="JSOFT Admin" />
    </a>
    <div class="visible-xs toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
      <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
    </div>
  </div>

  <!-- start: search & user box -->
  <div class="header-right">

    <form  class="search nav-form">
      <div class="input-group input-search">
        <input type="text" class="form-control" name="q" id="q" placeholder="Search...">
        <span class="input-group-btn">
          <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
        </span>
      </div>
    </form>

    
  </div>
  <!-- end: search & user box -->
</header>
</template>