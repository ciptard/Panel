<!-- Wrapper -->
<div id="morfy_panel" class="wrapper">
	<!-- Sidebar -->
	<div class="sidebar">
	  	<div class="panel_logo">
		  	<a href="<?php echo Panel::Root('panel'); ?>">
				<img src="<?php echo Panel::Root(); ?>plugins/panel/assets/img/logo.jpg" alt="Mofry Panel">
			</a>
		</div>
	    <?php if (!empty($_SESSION['login'])) {?>
	    <nav>
	    	<ul class="menu">
	              	<li><a href="panel" title="<?php echo $lang['Home']; ?>"><i class="fa fa-home"></i> &nbsp; <span><?php echo $lang['Home']; ?></span></a></li>
	              	<li><a href="?get=images" title="<?php echo $lang['Images']; ?>"><i class="fa fa-image"></i> &nbsp; <span><?php echo $lang['Images']; ?></span></a></li>
	              	<li><a href="?get=uploads" title="<?php echo $lang['New Image']; ?>"><i class="fa fa-file-image-o"></i> &nbsp; <span><?php echo $lang['New Image']; ?></span></a></li>
	              	<li><a href="?get=new" title="<?php echo $lang['New Page']; ?>"><i class="fa fa-edit"></i> &nbsp; <span><?php echo $lang['New Page']; ?></span></a></li>
	              	<li><a href="?get=settings" title="<?php echo $lang['Settings']; ?>"><i class="fa fa-gears"></i> &nbsp;<span> <?php echo $lang['Settings']; ?></span></a></li>
			<li><a href="?get=documentation" title="<?php echo $lang['Documentation']; ?>"><i class="fa fa-support"></i> &nbsp; <span><?php echo $lang['Documentation']; ?></a></li>
			<li><a href="#" class="toggle_menu" title="Show of hide menu"><i class="fa fa-arrow-left"></i> &nbsp; <span>Toggle menu</span></a></li>
		</ul>
	</nav>
	<?php } ?>
	
	</div>
	
	<!-- Main content -->
	<div class="main">
	
	<!-- Header  -->
	<header class="header">
		<a class="header-title pull-left" href="<?php echo Panel::Root('panel'); ?>">MORFY PANEL</a>
		<div class="pull-right well-sm">
		<?php if (!empty($_SESSION['login'])){ ?>
			<a href="?action=logout"><i class="fa fa-sign-out fa-2x"></i></a>
		<?php } ?>
		</div>
	</header>
	
	<!-- Content -->
	<section class="content">
		<div class="alert_panel"></div>
		<?php if (empty($_SESSION['login'])) { ?>
			<?php Morfy::factory()->runAction('auth'); ?>
		 <?php }else{  ?>
		 	<?php Morfy::factory()->runAction('content'); ?>
		 <?php } ?>
	</section>
	
	<!-- Footer -->
	<footer class="footer">
		<p class="text-muted text-center"><?php echo $lang['Powered by']; ?><a href="http://morfy.monstra.org/" title="Simple and fast file-based CMS">Morfy</a>.</p>
	</footer>

</div>

</div>

