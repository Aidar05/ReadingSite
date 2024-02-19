<template>
	<div id="footer">
		<div class="footer_container">
			<div class="footer_about">
				<h3>О сайте</h3>
				<p>Royal Road® - это дом веб-романов и фан-фикшенов! В нашем удивительном сообществе
					вы можете найти различных талантливых людей, которые пишут как хобби или даже
					профессионально, художников, которые создают искусство для них, и много-много
					читателей, которые дают ценные отзывы и поощрения.
				</p>
			</div>

			<div class="help">
				<div class="help_f">
					<h3>Контакты</h3>
					<a href="">7 707 246 20 56</a>
					<a href="">asdfASDF1@gmail.com</a>
				</div>  
				
				<div class="help_s">
					<h3>Реклама</h3>
						<a href="">Реклама для авторов</a>
						<a href="">Реклама на AsDf</a>
				</div>
			</div>

			<div class="theme_select">
				<h3>Тема</h3>
				<select id="theme">
					<option id="dark">Темная</option>
					<option id="light">Светлая</option>
				</select>
			</div>
		</div>

		<div class="footer_container">
			<span>AsDf 2023</span>
			<div class="policies">
				<a href="#">Условия использования</a>
				|
				<a href="#">Политика конфиденциальности</a>
				|
				<a href="#">Использование cookies</a>
				|
				<a href="#">Статус</a>
			</div>
		</div>
	</div>
</template>

<script>
import "../assets/css/footer.css"

export default {
    name: 'Description',
}

</script>