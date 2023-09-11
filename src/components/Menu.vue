<template>
    <aside id="sidebar-left" class="sidebar-left">
  
  <div class="sidebar-header">
    <div class="sidebar-title">
      Navigation
    </div>
    <div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
      <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
    </div>
  </div>

  <div class="nano">
    <div class="nano-content">
      <nav id="menu" class="nav-main" role="navigation">
        <ul class="nav nav-main">
          <li class="nav-active">
           
            <router-link to="/"> <i class="fa fa-home" aria-hidden="true"></i>
              <span>Inicio</span></router-link>
          </li>
          <li >
           
           <router-link :to="{name:'mostrarcuerpo',params:{opcion:'Producto'}}" :key="1"> <i class="fa fa-list" aria-hidden="true"></i>
             <span>Producto</span></router-link>
         </li>
         <li >
           
           <router-link :to="{name:'mostrarcuerpo',params:{opcion:'Fertilizante'}}" :key="2"> <i class="fa fa-filter" aria-hidden="true"></i>
             <span>Fertilizante</span></router-link>
         </li>
         <li >
           
           <router-link :to="{name:'mostrarcuerpo',params:{opcion:'Siembra'}}" :key="3"> <i class="fa fa-eye" aria-hidden="true"></i>
             <span>Siembra</span></router-link>
         </li>
        </ul>
      </nav>

     

    </div>

  </div>

</aside>
</template>
<style lang="css">
#menu .resaltar{
    color:rgb(223, 238, 207);
    border-bottom: 2px solid rgb(223, 238, 207);
}
</style>