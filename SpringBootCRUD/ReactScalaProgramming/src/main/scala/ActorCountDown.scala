


import akka.actor.Actor


object ActorCountDown extends App{
  case class StartCounting(n:Int, other: AnyRef)
  case class Counting(n:Int)

  class CountDown extends Actor{


    def receive = {
      case StartCounting(n,other) =>
                                    println(n)
                                    sender ! Counting(n-1)
    }
  }

}
