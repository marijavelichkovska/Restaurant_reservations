# Restaurant_reservations
Семинарска работа по Веб Програмирање на ФИНКИ,
Марија Величковска 171517 

Опис: Апликација за резервација во ресторан. Корисникот се најавува со username и password, доколку сеуште нема креирано
профил може да се регистрира.
Следно избира ден и термин, број на гости и доколку сака може да се избере од менито храна.
Паралелно администраторот се логира со email и password. Не постои можност да се направи профил за администратор. Неговите податоци
се внесени однапред во база. Секој администратор може да ја потврди резервација. Во момент кога тој ќе ја потврди таа станува важечка
и терминот којшто е резервиран од корисник повеќе не е слободен. Кога ќе биде прифатена резервацијата на соодветен корисник му се испраќа 
маил во кој ги има податоците за резервацијата. 
Освен овие функционалности апликацијата има подетални информации за ресторанот како контакт, локација, галерија.

Фронтендот се стартнува на порта 3000, со npm start соодветно навигирани во фолдерот Restaurants_reservation/Frontend. Додека пак SpringBootApplication
треба да биде стартната RestaurantsApplication.
Како база се користи PostgreSQL со табели: Администратор, Корисник, Резервација, Храна, Резервација_Храна
