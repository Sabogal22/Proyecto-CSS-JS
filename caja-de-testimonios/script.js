const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "He trabajado literalmente con cientos de desarrolladores de HTML/CSS y tengo que decir que el primer puesto es para este tipo. Este tipo es un desarrollador increíble. Hace hincapié en un código bueno y limpio y presta atención a los detalles. Me encantan los desarrolladores que respetan todos y cada uno de los aspectos de un diseño cuidadosamente pensado y hacen todo lo posible para ponerlo en código. Va más allá y transforma el ARTE en PÍXELES, sin fallas, siempre.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Este chico es un increíble desarrollador frontend que entregó la tarea exactamente como la necesitamos, hágase un favor y contrátelo, no se sentirá decepcionado por el trabajo entregado. Hará un esfuerzo adicional para asegurarse de que esté satisfecho con su proyecto. ¡Seguro que volveré a trabajar con él!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "Este tipo es un gran trabajador. La comunicación también fue muy buena con él y fue muy receptivo todo el tiempo, algo que no es fácil de encontrar en muchos freelancers. Sin duda repetiremos con él.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "Este tipo hace todo lo que puede para hacer el trabajo y hacerlo bien. Esta es la segunda vez que lo contrato y lo volveré a contratar en el futuro.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "Tenía mis preocupaciones de que, debido a un plazo ajustado, este proyecto no se puede realizar. Pero este tipo demostró que estaba equivocado, no solo entregó un trabajo sobresaliente, sino que logró entregarlo 1 día antes de la fecha límite. Y cuando le pedí algunas revisiones, las hizo en MINUTOS. Tengo muchas ganas de volver a trabajar con él y lo recomiendo totalmente. ¡Gracias de nuevo!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'Este tipo es un diseñador y desarrollador front-end de primer nivel. Se comunica bien, trabaja rápido y produce un trabajo de calidad. ¡Hemos tenido la suerte de trabajar con él!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'Este chico es un profesional de TI joven y talentoso, proactivo y responsable, con una fuerte ética de trabajo. Es muy fuerte en conversiones PSD2HTML y tecnología HTML/CSS. Aprende rápido, ansioso por aprender nuevas tecnologías. Está enfocado y tiene la buena dinámica para lograr fechas de vencimiento y resultados sobresalientes.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)