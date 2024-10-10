<template>
  <div class="main-content">
  <div class="concept concept-eight">
    <h1 class="word">
        <div class="char" data-content="A">A</div>
        <div class="char" data-content="N">N</div>
        <div class="char" data-content="D">D</div>
        <div class="char" data-content="R">R</div>
        <div class="char" data-content="E">E</div>
        <div class="char" data-content="Y">Y</div>
    </h1>
  </div>
</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
body {
	background: #fff;
	font-family: "Comfortaa", sans-serif;
	position: relative;
}

.main-content {
	text-align: center;
	text-transform: uppercase;
	scroll-snap-type: y mandatory;
	position: relative;
	height: 100vh;
	overflow-y: scroll;
}

.hover,
.word,
h1 {
	cursor: pointer;
}

h1 {
	position: relative;
	color: #fff;
	font: 900 60px Montserrat;
	text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.concept {
	position: relative;
	padding: 5em;
	height: 100vh;
	overflow: hidden;
	scroll-snap-align: center;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: radial-gradient(rgba(0, 0, 0, 0.3), transparent);
		opacity: 0;
		transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
	}
	&:hover:before {
		opacity: 0.5;
	}
}

.concept-eight {
	background: url(../assets/header.jpg) top
		right / cover;
	display: flex;
	align-items: center;
	justify-content: center;
	.word {
		display: flex;
		align-items: center;
		justify-items: center;
		width: 450px;
		height: 80%;
		&:hover .char:before {
			transition: 0.6s ease;
			color: rgba(255, 255, 255, 0.8);
			animation: falls 1s ease forwards;
		}
		&:hover .char:nth-child(1):before {
			animation: falls 0.9s ease 0.2s forwards;
		}
		&:hover .char:nth-child(2n + 3):before {
			animation: falls 1s ease 0.3s forwards;
		}
	}
	.char {
		flex: 1;
		position: relative;
		&:before {
			content: attr(data-content);
			position: absolute;
			top: 0;
			color: transparent;
			text-shadow: none;
		}
	}
}

@keyframes falls {
	0% {
		opacity: 0;
		top: 0;
	}
	20% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		top: 100px;
	}
}

</style>