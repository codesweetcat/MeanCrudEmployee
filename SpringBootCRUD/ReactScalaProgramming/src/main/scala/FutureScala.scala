


import scala.concurrent.Future
import io.StdIn._
import scala.annotation.tailrec
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Failure, Success, Try}
object  ParallelCollect {

  def fib(n:Int):Int = if(n<2) 1 else fib(n-1)+fib(n-2)
}
object FutureScala extends App {

val f =  Future {
  println("Printing in the future")

  }
  Thread.sleep(1000)
  println("this is last")
  //readLine()

val f2 = Future {
  for (i<-1 to 30) yield  ParallelCollect.fib(i)
  throw new RuntimeException("bad")
}

  //f2.foreach(println)
f2.onComplete{
  case Success(n) => println(n)
  case Failure(ex) => println("some"+ex)

}


  Thread.sleep(5000)
}
