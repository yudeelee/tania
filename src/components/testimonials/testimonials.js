import React from "react";
import Container from "../../hlc/container";
import classes from "./testimonials.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {
    return (
        <div className={classes.Testimonials}>
            <Container>
                <div className={classes.Testimonials_title}>Відгуки клієнтів</div>
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={1000}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className={classes.sw_slide}>
                            Про Вас довідалась коли написала в пошуку в Інстаграмі «бухгалтер» і ви мені відписали перша, бо я написала декільком.
                            Так, я все що хотіла – зрозуміла, навіть більше.
                            Звісно, що порекомендую, ви мені пояснили усе, що мене цікавило і навіть більше. Відповіли на усі мої питання і для відкриття ФОП я обов’язково звернусь до вас!

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Доброго дня!
                        Грала вперше, було дуже цікаво та пізнавально )
                        Атмосфера була легкою та невимушеною, а гра наче трішки змінює свідомість і дозволяє побачити твої «прогалини» в управлінні своїми фінансами!
                        Хочу ще!
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Хочу написати відгук.
                        Я дуже задоволена проведеною Вами консультацією.
                        Я прийшла з великою кількістю запитань, але подача інформації була настільки доступною, що я вийшла з хорошими емоціями (рада, що обрала саме Тетяну) і з розумінням моїх подальших дій.
                        Дуже дякую)
                        Тепер я знаю, до кого звертатись за допомогою у веденні ФОП!
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Дякую за консультацію! Дуже багато цікавої і корисної інформації, а головне, що все доступно і зрозуміло пояснюєш!
                        Для мене це дуже цінно, бо я тільки вливаюсь у сферу бізнесу.
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Дякую, що запросила на цю гру. Мені було цікаво і одночасно весело. Коли прийшла думала, що буде складно, але ви дуже круто пояснили що і до чого. Мої висновки Cash Flow дозволяє зрозуміти як правильно інвестувати свої гроші, які потім принесуть вам прибуток, а можливо і не принесуть). Це гра для людей, які хочуть навчитись керувати грошима та ризикувати. А ще я хочу попасти на велике коло, тому точно прийду ще раз!
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Найперше хочу подякувати за швидку та оперативну роботу, за цікаву та змістовну міні лекцію по веденні ФОП, за цікаву зустріч, роз’яснення всіх деталей наочно
                        І ще купу всього.
                        Тому, як якщо будуть в мене ще якісь питання то тільки до тебе, ти супер профі у своїй діяльності!
                        Ще раз дякую!
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Доброго дня. Дякую за консультації, вони дуже цінні. У мене досі не було справи з бухгалтерією і я думав, що це щось нереальне. Проте Ви все гарно пояснили, показали, і я тепер розумію, що не все так складно. Година консультації з Вами замінила години читання різних текстів і перегляду відео, де не завжди пишуть/розказують те, що саме тобі потрібно. Буду рекомендувати Вас знайомим.
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Добрый день. Хорошо, спасибо) Выбрал Вас потому, что увидел в Вас винмательного профессионала! Работать очень легко и комфортно! Планирую и дальше продолжать)
                    </div></SwiperSlide>
                    <SwiperSlide><div className={classes.sw_slide}>Привіт. По ПРРО все працює добре. Дякую за налаштування та підтримку в ході користування послугою. Наразі все ок. Вже рекомендував Вас іншим підприємцям!
                    </div></SwiperSlide>

                </Swiper>
            </Container>
        </div>
    )
}

export default Testimonials;