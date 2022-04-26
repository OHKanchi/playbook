const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
  
   explorers.forEach(element => console.log(element.name, element.stack))
   
   const listaStack = explorers.map((stacks) => stacks.stack)
   console.log(listaStack)

   const stackWithJs = explorers.filter((js) => js.stack.includes('js'))
   console.log(stackWithJs)

   const exCDMX = explorers.find((ciudad) => ciudad.city = 'CDMX')
   console.log(exCDMX)

   const sumaEx = explorers.reduce((red, element) => red + element.exercises_completed, 0)
   console.log(sumaEx)

   const exFinTrue = explorers.some(finish => finish.missions.frontend.exercisesFinished === true)
   console.log("¿Alguien ya terminó sus ejercicios FrontEnd? " + exFinTrue)
   
   const OnbTr = explorers.every(tr => tr.missions.onboarding.isFinished === true)
   console.log(`¿Todos los alumnos finalizaron el onboarding?: ${OnbTr}`)
