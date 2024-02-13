<template>
  <div class="main_container" id="intro">
		<div class="content"> 
			<div class="banner_container">
				<div class="slogan">Путешествие за гранью слов.</div>

				<div class="small_slogan">Ваш личный центр чтения</div>
			</div>


			<div class="browse_novels_container">
				<h2 class="browse_novels_header">Лучшее место для читателей</h2>
				
				<span class="intro_text">Эта платформа была создана читетелем, в целях читать
					больше и лучше. Я позаботилися о том, чтобы для у нас всех были потрясающие 
					истории для чтения и простые способы их найти. С постоянно совершенствующимс
					я набором инструментов для поддержки авторов на их пути к успеху.
				</span>
				
				<a href="browse.html"><button class="learn_button">Browse</button></a>
			</div>
		</div>		
	</div>
</template>

<script>
export default {
  name: 'Intro',}

</script>


<style>
	/* The first page */
	#intro{
		width: var(--main_container_width);
		height: auto;

		margin: auto;
		color: var(--text_color);
		background-color: var(--container_bg_color);
		user-select: none;
		opacity: var(--bg_opacity);
		padding-bottom: 40px;
	}

	/* Stuff in intro */
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;	
		
		padding-top: 30px;
		width: 60wv;
	}

	.banner_container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;

		width: 100%;
		aspect-ratio: 3.7 / 1;
		background-image:  linear-gradient(
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3)),
			url("../assets/imgs/banner.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 15px;
	}

	.slogan{
		color: white;	
		text-transform: capitalize;
		font-size: var(--text_size_bigHeader);
		font-weight: 700;
	}

	.small_slogan{
		color: white;
		font-size: var(--text_size_header);
		font-style: italic;
	}

	.browse_novels_container{
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 30px;
		border: 1px solid var(--accent_color);
		border-radius: 15px;
	}

	.browse_novels_header{
		margin: 0;
	}

	.learn_button{
		color: var(--call_to_action_textColor);
		background-color: var(--call_to_action_color);
		
		text-transform: uppercase;
		font-size: var(--text_size_small);
		border: 1px solid;
		border-color: var(--accent_color);
		height: 40px;
		width: 160px;
	}

	.learn_button:hover{
		opacity: 0.6;
	}

	.intro_text{
		font-size: var(--text_size_primary);
	}
</style>