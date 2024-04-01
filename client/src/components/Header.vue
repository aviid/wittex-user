<template>
  <header class="u-header">
        <div class="u-header-left">
				<a class="u-header-logo" href="index.html">
					<img class="u-logo-desktop" 
                        src="@/assets/img/logo.png" 
                        width="160" alt="WiitEx Dashboard" 
                    />
					<img class="img-fluid u-logo-mobile" 
                        src="@/assets/img/logo-mobile.png" 
                        width="50" alt="WiitEx Dashboard" 
                    />
				</a>
		</div>

        <div class="u-header-middle">
            <a class="js-sidebar-invoker u-sidebar-invoker" href="#!"
                data-is-close-all-except-this="true"
                data-target="#sidebar">
                <i class="fa fa-bars u-sidebar-invoker__icon--open"></i>
            </a>
        </div>

        <div class="u-header-right mr-4">	
            <div class="dropdown ml-2">
                <a href="" class="link-muted d-flex align-items-center" role="button" id="dropdownMenuLink" 
                    aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">

                    <img class="u-avatar--xs img-fluid rounded-circle mr-2" 
                        src="@/assets/img/avatars/user-unknown.jpg" 
                        alt="User Profile" 
                    />
                        <span class="text-dark d-none d-sm-inline-block">
                            Bruce Goodman <small class="fa fa-angle-down text-muted ml-1"></small>
                        </span>
                </a>

                <div class="dropdown-menu dropdown-menu-right border-0 py-0 mt-3" 
                aria-labelledby="dropdownMenuLink" :style="{ width: '260px' }">
                    <div class="card">
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                                <li class="mb-4">
                                    <a class="d-flex align-items-center link-dark" href="/profile">
                                        <span class="h3 mb-0">
                                            <i class="far fa-user-circle text-muted mr-3"></i>
                                        </span>  Profile
                                    </a>
                                </li>
                                
                                <li>
                                    <a class="d-flex align-items-center link-dark" href="#!">
                                        <span class="h3 mb-0"><i class="far fa-share-square text-muted mr-3"></i></span> Sign Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </header>
</template>

<script>
export default {
    name:"Header"
  // No functions included
};
</script>