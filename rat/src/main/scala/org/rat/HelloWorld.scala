package org.rat

import io.circe._
import org.http4s._
import org.http4s.circe._
import org.http4s.server._
import org.http4s.dsl._

import java.io.File
import scalaz.concurrent.{Strategy, Task}

object HelloWorld {
  val service = HttpService {
    case GET -> Root / "hello" / name =>
      Ok(Json.obj("message" -> Json.fromString(s"Hello How, ${name}")))
    case request @ GET -> Root / "index.html" =>
        StaticFile.fromFile(new File("public/index.html"), Some(request))
          .map(Task.now)
          .getOrElse(NotFound())
    case request @ GET -> "public" /: path => {
          println("public" + path.toString)
          // StaticFile.fromResource(("public" + path.toString), Some(request))
          //   .fold(NotFound())(Task.now)
          StaticFile.fromFile(new File("public" + path.toString), Some(request))
            .map(Task.now)
            .getOrElse(NotFound())
        }
  }
}
