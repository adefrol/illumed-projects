import { HeadingBadge } from '@/components/course-website/HeadingBadge'
import { createFileRoute } from "@tanstack/react-router"
import { ArrowUpWideNarrow, Clock, Linkedin, MessageCircleMore, Play, Share2, ThumbsDown, ThumbsUp, Twitch, Twitter } from 'lucide-react'

import review1 from "@/assets/course-website/review-1.jpg"
import review2 from "@/assets/course-website/review-2.jpg"
import test from "@/assets/course-website/test.jpg"
import coworking1 from "@/assets/course-website/coworking-1.jpg"
import coworking2 from "@/assets/course-website/coworking-2.jpg"

export const Route = createFileRoute("/course-website/")({
    component: () => <CourseHome />,
})

export const CourseHome = () => {
    return (
        <>
            <div className="fixed w-full h-full bg-cover filter brightness-[.3]  bg-[url('https://img.freepik.com/premium-photo/darken-black-texture-background_34168-920.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais')] -z-10"></div>
            <div className="py-10 flex items-center justify-evenly px-20 text-white ">
                <a href="#">Про курс</a>
                <a href="#">Тарифы</a>
                <a href="#">Про нас</a>
                <a href="#">Записаться</a>
                <a href="#">Контакты</a>
            </div>

            <div className="max-w-[1400px] w-full mx-auto relative">
                <HeadingBadge className='left-[10rem] top-[9rem] rotate-12' svg='BookA' />
                <HeadingBadge className='left-[57rem] top-[7rem] -rotate-12' svg='Languages' />
                <HeadingBadge className='left-[65rem] top-[24rem] rotate-12' svg='UserCog' />
                <div className="font-unbounded font-[900]  w-[1300px] mx-auto py-32">
                    <h1 className='text-center text-white text-9xl'>Учи Английский Везде</h1>

                </div>
                <p className='text-[#b6b6b6] font-montserrat-alternates text-center text-2xl'>Укрепите свой профессиональный статус с нашими занятиями по деловому английскому и покажите миру, на что вы способны</p>
                <button className="mx-auto block my-10 p-4 px-10 bg-[#FFFC31] rounded-full font-montserrat font-bold">Подобрать курс</button>
            </div>
            <div className="h-[100px] bg-[#fFFC31] my-40 w-full flex justify-between items-center font-montserrat font-extrabold text-5xl"><p>ПОКУПАЙ СЕЙЧАС</p> <p>ПОКУПАЙ СЕЙЧАС</p> <p>ПОКУПАЙ СЕЙЧАС</p> <p>ПОКУПАЙ СЕЙЧАС</p> <p>ПОКУПАЙ СЕЙЧАС</p> <p>ПОКУПАЙ СЕЙЧАС</p></div>
            <div className="p-20">
                <h2 className='font-montserrat-alternates text-7xl font-black text-white text-center'>Цель курса</h2>
                <div className="flex items-center justify-center py-16">
                    <div className="h-[400px] w-[500px] bg-[#FFFC31] relative z-30 left-14 rounded-[50px] flex flex-col items-center justify-center">
                        <h2 className='text-9xl font-montserrat-alternates'>01</h2>
                        <p className='font-medium text-center text-xl w-[85%]'>Улучшение разговорных навыков и лексического запаса в бизнес тематике</p>
                    </div>
                    <div className="h-[400px] w-[500px] bg-[#fdfe88] relative z-20 rounded-br-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
                        <h2 className='text-9xl font-montserrat-alternates'>02</h2>
                        <p className='font-medium text-center text-xl w-[65%]'>Общение с иностранными партёрами </p>

                    </div>
                    <div className="h-[400px] w-[500px] bg-white rounded-br-[50px] right-14 relative z-10 rounded-tr-[50px] flex flex-col items-center justify-center">
                        <h2 className='text-9xl font-normal font-montserrat-alternates'>03</h2>
                        <p className='font-medium text-center text-xl w-[45%]'>Ведение бизнеса за границей</p>

                    </div>
                </div>
            </div>
            <div className="p-20">
                <h2 className='font-montserrat-alternates text-7xl font-black text-white text-center'>Формат обучения</h2>
                <div className="flex justify-evenly relative items-center p-20">
                    <div className="bg-[#1c1c1c] py-10 px-10 w-[25%] h-[250px] rounded-[50px]">
                        <div className="flex items-center justify-center bg-[#2c2c2c] w-[50%] p-5 rounded-3xl text-white font-bold text-xl">
                            <Clock color='#FFFC31' className='w-[40px] h-[40px] mr-5' />
                            <p >Формат</p>
                        </div>
                        <p className='text-5xl text-[#FFFC31] p-8'>60 минут</p>
                    </div>
                    <div className="bg-[#FFFC31] py-10 relative z-20 px-10 w-[25%] transofm rotate-3 transition-all hover:-rotate-3 h-[250px] rounded-[50px]">
                        <div className="flex items-center justify-center bg-[#2c2c2c] w-[50%] p-5 rounded-3xl text-white font-bold text-xl">
                            <ArrowUpWideNarrow color='#FFFC31' className='w-[40px] h-[40px] mr-5' />
                            <p >Формат</p>
                        </div>
                        <p className='text-5xl text-[#2c2c2c] p-8'>50+ уроков</p>
                    </div>
                    <div className="bg-transparent absolute border-dashed border-4 border-[#727272] w-[24%] h-[250px] rounded-[50px]">

                    </div>
                    <div className="bg-[#1c1c1c] py-10 px-10 w-[25%] h-[250px] rounded-[50px]">
                        <div className="flex items-center justify-center bg-[#2c2c2c] w-[50%] p-5 rounded-3xl text-white font-bold text-xl">
                            <Play color='#FFFC31' className='w-[40px] h-[40px] mr-5' />
                            <p >Формат</p>
                        </div>
                        <p className='text-5xl text-[#FFFC31] p-8'>Онлайн</p>
                    </div>
                </div>
            </div>
            <div className="py-20 max-w-[1400px] w-full mx-auto">
                <h2 className='font-montserrat-alternates text-7xl font-black text-white text-center'>Тарифы</h2>
                <div className="flex items-center justify-between py-14 text-white">
                    <div className="bg-[#1c1c1c]  py-10 px-14 rounded-[50px]">
                        <div className="flex flex-col justify-between">
                            <h2 className='text-4xl font-bold my-4'>Эконом</h2>
                            <div className="font-bold text-2xl px-2 py-3">
                                <p className='py-2'>&#x2022; 30 занятий</p>
                                <p className='py-2'>&#x2022; 1 учитель</p>
                                <p className='py-2'>&#x2022; 1-2 раза в неделю</p>
                            </div>
                            <div className="font-montserrat-alternates py-6 ">
                                <p className='line-through text-3xl text-[#b6b6b6]'>17 000 &#8381;/мес</p>
                                <p className='font-extrabold text-4xl'>12 000 &#8381;/мес</p>
                            </div>
                            <button className="mx-auto block my-6 p-4 px-10 bg-[#FFFC31] text-black rounded-full font-montserrat font-bold">Приобрести</button>
                        </div>
                    </div>
                    <div className="bg-[#1c1c1c] py-12 px-16 rounded-[50px]">
                        <div className="flex flex-col justify-between">
                            <h2 className='text-5xl font-bold my-4'>Стандарт</h2>
                            <div className="font-bold text-3xl px-2 py-3">
                                <p className='py-2'>&#x2022; 40 занятий</p>
                                <p className='py-2'>&#x2022; 1 учитель</p>
                                <p className='py-2'>&#x2022; 2 раза в неделю</p>
                            </div>
                            <div className="font-montserrat-alternates py-6 ">
                                <p className='line-through text-4xl text-[#b6b6b6]'>20 000 &#8381;/мес</p>
                                <p className='font-extrabold text-5xl'>16 000 &#8381;/мес</p>
                            </div>
                            <button className="mx-auto block my-6 p-4 px-10 bg-[#FFFC31] text-black rounded-full font-montserrat font-bold">Приобрести</button>
                        </div>
                    </div>
                    <div className="bg-[#1c1c1c] py-10 px-14 rounded-[50px] ">
                        <div className="flex flex-col justify-between">
                            <h2 className='text-4xl font-bold my-4'>Премиум</h2>
                            <div className="font-bold text-2xl px-2 py-3">
                                <p className='py-2'>&#x2022; 55 занятий</p>
                                <p className='py-2'>&#x2022; 1 учитель</p>
                                <p className='py-2'>&#x2022; 3 раза в неделю</p>
                            </div>
                            <div className="font-montserrat-alternates py-6 ">
                                <p className='line-through text-3xl text-[#b6b6b6]'>25 000 &#8381;/мес</p>
                                <p className='font-extrabold text-4xl'>20 000 &#8381;/мес</p>
                            </div>
                            <button className="mx-auto block my-6 p-4 px-10 bg-[#FFFC31] text-black rounded-full font-montserrat font-bold">Приобрести</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="py-20 pt-40 max-w-[1400px] w-full mx-auto">
                    <div className="flex items-center justify-between text-white">
                        <div className="max-w-[500px] text-justify">
                            <h2 className='text-4xl'>С помощью теста вы можете определить свой уровень английского языка</h2>
                            <button className="block my-6 p-4 px-10 bg-[#FFFC31] text-black rounded-full font-montserrat font-bold">Проверить</button>
                        </div>
                        <div className="pl-40">
                            <div className="relative">
                                <img src={test} className='rounded-3xl' alt="" />
                                <div className="bg-[#FFFC31] -bottom-4 -left-4 -rotate-12 rounded-full absolute">
                                    <p className='p-5 text-3xl  text-black w-fit'>A2</p>
                                </div>
                                <div className="bg-[#FFFC31] -top-10 right-0 -rotate-12 rounded-full absolute">
                                    <p className='p-5 text-3xl  text-black w-fit'>B1</p>
                                </div>
                                <div className="bg-[#FFFC31] -top-10 right-16 rounded-full absolute">
                                    <p className='p-5 text-xl  text-black w-fit'>C2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 pt-40 max-w-[1400px] w-full mx-auto">
                <h2 className='font-montserrat-alternates text-7xl font-black text-white text-center'>Про нас</h2>
                <div className="flex items-center justify-between text-white pt-20">
                    <div className="max-w-[500px] text-justify">
                        <div className="py-4">
                            <h2 className='text-4xl text-[#FFFC31] font-bold py-4'>Мы команда</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae laudantium ratione dolor dignissimos ducimus in voluptates explicabo</p>
                        </div>
                        <div className="py-4">
                            <h2 className='text-4xl text-[#FFFC31] font-bold py-4'>Наша миссия</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae laudantium ratione dolor dignissimos ducimus in voluptates explicabo</p>
                        </div>
                        <div className="py-4">
                            <h2 className='text-4xl text-[#FFFC31] font-bold py-4'>Мы предлагаем</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae laudantium ratione dolor dignissimos ducimus in voluptates explicabo</p>
                        </div>

                    </div>
                    <div className="pl-20">
                        <div className="relative">
                            <img src={coworking1} className='rounded-3xl border-solid border-[#fffC31] border-2' alt="" />
                        </div>
                    </div>
                    <div className="pl-20">
                        <div className="relative">
                            <img src={coworking2} className='rounded-3xl border-solid border-[#fffC31] border-2' alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full my-20 h-44 rounded-[50px] bg-[#1f1f1f]">
                    <div className="p-6 flex items-center justify-around h-full">
                        <div className=" text-center">
                            <h2 className='text-[#FFFC31] py-2 font-black font-montserrat-alternates text-5xl'>10000+</h2>
                            <p className='text-white py-2 text-2xl'>Отзывов</p>
                        </div>
                        <div className="h-[80%] border-[1px] border-solid border-[#FFFC31]"></div>
                        <div className=" text-center">
                            <h2 className='text-[#FFFC31] py-2 font-black font-montserrat-alternates text-5xl'>10000+</h2>
                            <p className='text-white py-2 text-2xl'>Отзывов</p>
                        </div>
                        <div className="h-[80%] border-[1px] border-solid border-[#FFFC31]"></div>
                        <div className=" text-center">
                            <h2 className='text-[#FFFC31] py-2 font-black font-montserrat-alternates text-5xl'>10000+</h2>
                            <p className='text-white py-2 text-2xl'>Отзывов</p>
                        </div>
                        <div className="h-[80%] border-[1px] border-solid border-[#FFFC31]"></div>
                        <div className=" text-center">
                            <h2 className='text-[#FFFC31] py-2 font-black font-montserrat-alternates text-5xl'>10000+</h2>
                            <p className='text-white py-2 text-2xl'>Отзывов</p>
                        </div>
                    </div>
                </div>
                <h2 className='font-montserrat-alternates py-20 text-7xl font-black text-white text-center'>Отзывы</h2>
                <div className="py-20 text-white">
                    <div className="flex items-center justify-around">
                        <div className="w-[40%] h-[700px] relative bg-[#1f1f1f] rounded-[50px] flex flex-col p-10">
                            <div className="absolute -top-32  inset-x-0 flex justify-center items-center">
                                <img src={review1} className='rounded-full w-[50%] border-2 border-[#FFFC31] border-solid' alt="" />
                            </div>
                            <div className="text-white text-center mt-32">
                                <h2 className='font-bold text-4xl'>Мария</h2>
                                <p className='text-xl py-2 text-[#b6b6b6]'>(выпускница)</p>
                            </div>
                            <div className="text-center py-20 font-semibold text-xl ">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi praesentium esse nihil vel, neque ipsum sint non impedit, voluptate dolores obcaecati sed minus, tempora ullam iure soluta ratione. Placeat, ipsa?</p>
                            </div>
                            <div className="flex justify-evenly items-center">
                                <div className="text-3xl">
                                    <ThumbsUp width={40} height={40} />
                                    <p className='py-5'>15</p>
                                </div>
                                <div className="text-3xl">
                                    <ThumbsDown width={40} height={40} />
                                    <p className='py-5'>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%] h-[700px] relative bg-[#1f1f1f] rounded-[50px] flex flex-col p-10">
                            <div className="absolute -top-32  inset-x-0 flex justify-center items-center">
                                <img src={review2} className='rounded-full w-[50%] border-2 border-[#FFFC31] border-solid' alt="" />
                            </div>
                            <div className="text-white text-center mt-32">
                                <h2 className='font-bold text-4xl'>Анастасия</h2>
                                <p className='text-xl py-2 text-[#b6b6b6]'>(выпускница)</p>
                            </div>
                            <div className="text-center py-20 font-semibold text-xl ">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi praesentium esse nihil vel, neque ipsum sint non impedit, voluptate dolores obcaecati sed minus, tempora ullam iure soluta ratione. Placeat, ipsa?</p>
                            </div>
                            <div className="flex justify-evenly items-center">
                                <div className="text-3xl">
                                    <ThumbsUp width={40} height={40} />
                                    <p className='py-5'>15</p>
                                </div>
                                <div className="text-3xl">
                                    <ThumbsDown width={40} height={40} />
                                    <p className='py-5'>15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='font-montserrat-alternates py-20 text-7xl font-black text-white text-center'>Следи за новинками</h2>
                <div className="py-20 mx-auto">
                    <div className="bg-[#1f1f1f] w-[50%] mx-auto rounded-[50px]">
                        <div className="flex gap-8 items-center flex-col p-20">
                            <input type="text" className='rounded-full p-6 w-full bg-white' placeholder='Имя' />
                            <input type="text" className='rounded-full p-6 w-full bg-white' placeholder='E-mail' />
                            <button className="mx-auto block my-6 p-6 w-full bg-[#FFFC31] text-black rounded-full font-montserrat font-bold">Подписаться</button>
                        </div>
                    </div>
                </div>

            </div>
            <footer className='w-full h-[200px] bg-[#1f1f1f]'>
                <div className="w-full h-full flex flex-col justify-center">
                    <div className="flex gap-5 justify-center items-center">
                        <MessageCircleMore color='#FFFC31' />
                        <Share2 color='#FFFC31' />
                        <Linkedin color='#FFFC31' />
                    </div>
                    <p className='text-center text-[#FFFC31] font-semibold text-xl'>+7 924 999 99 99</p>
                </div>

            </footer>
        </>
    )
}
