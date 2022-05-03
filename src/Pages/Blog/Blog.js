import React from "react";
import {
  FaQuoteLeft,
  FaChevronCircleRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
const Blog = () => {
  return (
    <div className=" bg-amber-50 px-5 md:px-32  pt-28 md:pt-24">
      <div>
        {/* Difference between Javascript and Node.JS */}

        <div>
          <div className="flex justify-center text-5xl mb-3 text-amber-800">
            <FaQuoteLeft></FaQuoteLeft>
          </div>
          <h1 className=" text-3xl md:text-4xl">
            Difference between Javascript and Node.JS ?
          </h1>

          {/* node.js */}
          <div className="flex items-center my-3">
            <span className=" text-amber-800">
              <FaChevronCircleRight />
            </span>
            <span className="ml-2 text-2xl">Node.JS </span>
          </div>
          <div className="ml-5">
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                Node.Js is mostly used in server side .{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                We can run Javascript outside the browser with the help of
                Node.JS.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                V8 is the Javascript engine inside of node.js that parses and
                runs Javascript .{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                Some of the Nodejs modules are Lodash, express etc. These
                modules are to be imported from npm.{" "}
              </span>
            </div>
          </div>

          {/* javascript */}

          <div className="flex items-center my-3">
            <span className=" text-amber-800">
              <FaChevronCircleRight />
            </span>
            <span className="ml-2 text-2xl">Javascript </span>
          </div>
          <div className="ml-5">
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                Javascript can only be run in the browsers.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                Javascript is used in frontend development.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                Javascript is the upgraded version of ECMA script that uses
                Chrome’s V8 engine written in C++.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                Some of the javascript frameworks are RamdaJS, TypedJS, React
                etc.{" "}
              </span>
            </div>
          </div>
        </div>


        {/* Differences between sql and nosql databases. */}

        <div>
          <div className="flex justify-center text-5xl mb-3 text-amber-800">
            <FaQuoteLeft></FaQuoteLeft>
          </div>
          <h1 className="text-3xl md:text-4xl">
          Differences between sql and NoSql databases ?
          </h1>

          {/* Sql */}
          <div className="flex items-center my-3">
            <span className=" text-amber-800">
              <FaChevronCircleRight />
            </span>
            <span className="ml-2 text-2xl">Sql </span>
          </div>
          <div className="ml-5">
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              Sql databases have fixed or static or predefined schema.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                Sql databases are not suited for hierarchical data storage.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                Sql is Vertically Scalable .{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              Sql databases are best suited for complex queries{" "}
              </span>
            </div>
          </div>

          {/* NoSql */}

          <div className="flex items-center my-3">
            <span className=" text-amber-800">
              <FaChevronCircleRight />
            </span>
            <span className="ml-2 text-2xl">NoSql </span>
          </div>
          <div className="ml-5">
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                NoSql databases are best suited for hierarchical data storage. {" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              NoSql databases are not so good for complex queries .{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              Horizontally scalable.{" "}
              </span>
            </div>
           
          </div>
        </div>

        {/* When should you use `nodejs` and when should you use `mongodb` */}

        <div>
          <div className="flex justify-center text-5xl mb-3 text-amber-800">
            <FaQuoteLeft></FaQuoteLeft>
          </div>
          <h1 className="text-2xl md:text-4xl">
          When should you use Node.Js and when should you use mongodb ?
          </h1>

          {/* Node.Js */}
          <div className="flex items-center my-3">
            <span className=" text-amber-800">
              <FaChevronCircleRight />
            </span>
            <span className="ml-2 text-2xl"> Use Node.Js ? </span>
          </div>
          <div className="ml-5">
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              Real time applications like online games, chat rooms can be created using node.js .{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                Node.Js can be used in the development of sockets only servers like chat and apps.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              Node.js is the best option for a completely cloud based application development.{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              Analytics webapp handle only small chunks of data and the processing can be made faster with the help of node.js .{" "}
              </span>
            </div>
          </div>

          {/* NoSql */}

          <div className="flex items-center my-3">
            <span className=" text-amber-800">
              <FaChevronCircleRight />
            </span>
            <span className="ml-2 text-2xl">Use Mongodb ? </span>
          </div>
          <div className="ml-5">
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
                {" "}
                MongoDB is a document-based non-relational database management system. It’s also called an object-based system. It was designed to supplant the MySQL structure as an easier way to work with data.  {" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              MongoDB is also free to use and open source .{" "}
              </span>
            </div>
            <div className="flex items-center my-3">
              <span className=" text-amber-500">
                <FaLongArrowAltRight />
              </span>
              <span className="ml-2 text-xl">
              MongoDB is a well-established, non-relational database system offering improved flexibility and horizontal scalability .{" "}
              </span>
            </div>
           
          </div>
        </div>








      </div>
    </div>
  );
};

export default Blog;
