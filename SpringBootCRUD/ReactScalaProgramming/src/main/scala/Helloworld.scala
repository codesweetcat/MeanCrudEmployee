/**
  * Created by haoming on 3/7/18.
  */
object Helloworld extends App{
  println("Hello Scala World!")
  def makeUpper(xs: List[String]) = xs map {
    _.toUpperCase
  }

  def makeWhatEverYouLike(xs: List[String], sideEffect: String ⇒ String) =
    xs map sideEffect
  val myName = (name: String) => s"My name is $name"
  println(makeWhatEverYouLike(List("John", "Mark"), myName))
  println(makeUpper(List("abc", "xyz", "123")) )
  println(makeWhatEverYouLike(List("ABC", "XYZ", "123"), { x ⇒
    x.toLowerCase
  }))

  println(List("Scala", "Erlang", "Clojure") map (_.length))
  val a = Array(10,5,6,7)
  val b: Option[Int] = a.find(_<10)
b  match
  {
  case Some(i) => println(s"found $i")
  case None => println("node")
}
}
