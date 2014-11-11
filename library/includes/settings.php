<?php
	$config = Panel::getContent('plugins/panel/library/config.php');
	$result = json_decode($config,true);

	if(Panel::Request_post('save_config')){
		$result = array(
			"Panel_lang" => Panel::Request_post('Panel_lang'),
			"Password" => Panel::Request_post('Password'),
			"Secret_key_1" => Panel::Request_post('Secret_key_1'),
			"Secret_key_2" => Panel::Request_post('Secret_key_2'),
			"Panel_Images" => Panel::Request_post('Panel_Images'),
			"Panel_Thumbnails" => Panel::Request_post('Panel_Thumbnails')
		);
		Panel::setContent('plugins/panel/library/config.php',json_encode($result));
		Panel::Notification('success','Success','Save config file',Panel::Root('panel?get=settings'));
	}
?>

<div class="container-fluid">
	<div class="row-fluid">
		<form class="form" method="post">
			<div class="form-group">
				<label for="panel_lang">Language</label>
				<select name="Panel_lang" class="form-control">
					<option value="<?php echo $result['Panel_lang']; ?>"> - Select - </option>
					<option value="es">Spanish</option>
					<option value="en">English</option>
					<option value="gr">Greek</option>
				</select>	
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" name="Password" class="form-control" value="<?php echo $result['Password']; ?>">			
			</div>
			<div class="form-group">
				<label for="Secret_key_1">Secret key 1</label>
				<input type="password" name="Secret_key_1" class="form-control" value="<?php echo $result['Secret_key_1']; ?>">			
			</div>
			<div class="form-group">
				<label for="Secret_key_2">Secret key 2</label>
				<input type="password" name="Secret_key_2" class="form-control" value="<?php echo $result['Secret_key_2']; ?>">			
			</div>
			<div class="form-group">
				<label for="Panel_Images">Full Images</label>
				<input type="text" name="Panel_Images" class="form-control" value="<?php echo $result['Panel_Images']; ?>">			
			</div>
			<div class="form-group">
				<label for="Panel_Thumbnails">Thumbnail Images</label>
				<input type="text" name="Panel_Thumbnails" class="form-control" value="<?php echo $result['Panel_Thumbnails']; ?>">			
			</div>
			<div class="form-group">
				<input type="submit" name="save_config" class="btn btn-primary" value="Save Config">
			</div>
		</form>
	</div>
</div>