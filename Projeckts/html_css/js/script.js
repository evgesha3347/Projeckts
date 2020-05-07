'use strict';

let menu = document.querySelector('.menu'),
    menuitem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    reklam = document.getElementsByClassName('adv')[0],
    ul = document.createElement('li'),
    promptI = document.getElementById('prompt');

	ul.classList.add('menu-item');                            //Добавить пятый пункт
    ul.innerHTML = 'Пятый пункт'
    menu.appendChild(ul);

    document.body.style.backgroundImage = "url('img/apple_true.jpg')";//Заменить картинку заднего фона

    menu.insertBefore(menuitem[2], menuitem[1]);                      //Восстановить порядок в меню
   
    title.innerHTML = 'Мы продаём только подлинную технику Apple';    //Поменять заголовок, добавить слово "подлинную" 

    reklam.remove();                                                  //Удалить рекламу

    let apple = prompt('Какое ваше отношение к технике apple');       //Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
        promptI.textContent = apple;

	                                                                  //
	




