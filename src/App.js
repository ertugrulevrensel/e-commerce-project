import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ProductDetail from "./Pages/ProductDetail";
import React, { useState } from "react";
import AddProduct from "./Pages/AddProduct";
function App() {
  const [getID, setID] = useState();
  const [getProductList, setProductList] = useState([
    {
      id: "3LA82AzBz9NGeEq4LZf7",
      brand: { id: "hoYzGqV0muhBQdltaadO", title: "levis" },
      color: { id: "fIfLpqMGo27vAUuGP3ky", title: "kırmızı" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "ayakkabı", id: "vHdbZttbtnFsab3GjstF" },
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      title: "Test Ürünü 19",
      price: 594.55,
    },
    {
      id: "3iItaLRDn891Y8tlihWS",
      brand: { id: "UecyKuxjf9zeA1sf1PD7", title: "lacoste" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "gömlek", id: "EAxL5ERqwiGzcnWQUpb5" },
      price: 229.36,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 10",
      isSold: false,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
    },
    {
      id: "53sRHS7AigOkNACR8EmH",
      brand: { id: "7lGYUTwVdJm3Dspwy5Ps", title: "pull&bear" },
      color: { title: "yeşil", id: "k6eFVpYLsQtMH0nGg8U7" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "şort", id: "ay5D4lTDr7ptj3bg3pQc" },
      isSold: false,
      price: 568.17,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      title: "Test Ürünü 12",
    },
    {
      id: "88FmZv5DByWUrXgFiMgT",
      brand: { id: "J5btZCzv6vCTMkFGYgiY", title: "nike" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { id: "E2RZNK56oVlPHx1rpMEd", title: "pantolon" },
      isSold: false,
      price: 874.71,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      title: "Test Ürünü 17",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "9LOQoG9DaJFIMDARonzD",
      brand: { title: "mavi", id: "SPAp6xFJoTvQWDOdJIOp" },
      color: { id: "zADt9mqybY0BfVqRlY0Y", title: "mavi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "ayakkabı", id: "vHdbZttbtnFsab3GjstF" },
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image3.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=kCKVXkwqgXxwCtrkRQTMnjyiLccvhxVOOg%2B8U%2BLqNBwXkQbzDYNnc7S%2BNv8qo3DI6axr%2B4Bp56sjYrRnlk1LQpyTlSrZ8d0YmIPu4EKqA6l%2Bq6UDxHMVUucHZfU1IFFA7I6229yzgncdNs39YcBM5GL3KeDdm5DhLtP5Wv4dwl%2Bof%2FEUgWYk725r0619AkcV2OVZWYAlWjbxljwvaTATme8%2BuzhhGWC%2B5nYLkvwbiPw%2FvmkPDJntq0nq825h5bKKVms95kXWvvib81%2FW2lFAMoCjcv%2Ftro3RBGNeMXbPyY92tjQ0ymr8hN9ppYnRqI%2BsgyXYtFYE%2FlRpor37PccyIQ%3D%3D",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 912.78,
      title: "Test Ürünü 26",
      isSold: false,
    },
    {
      id: "AXOw0WlMIBe2q8zkIWO5",
      brand: { title: "vakko", id: "ikLoH8kxHpyA7D6PZM0l" },
      color: { id: "nlqf5fBkM6iJiqwwjVWp", title: "sarı" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "şort", id: "ay5D4lTDr7ptj3bg3pQc" },
      title: "Test Ürünü 8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D",
      price: 781.89,
      isSold: false,
    },
    {
      id: "C6oiF3KV1CWNwVXlG4Mw",
      brand: { id: "UecyKuxjf9zeA1sf1PD7", title: "lacoste" },
      color: { id: "zADt9mqybY0BfVqRlY0Y", title: "mavi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "mont", id: "F2M107NYaLXAkpc6tNxp" },
      title: "Test Ürünü 0",
      price: 463.94,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image2.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=UsbmQHBuM2iilvDIwZORchIbUflBZ8v24DAQYWwfROj1dkyxubMC6JUdmhdP%2Bu0V4W8JXxbDCfGQe0Hcl2VAp0GWyJ0iViYiISWMO01lKBhUo3DhQ8wee1%2BUnp0XJG2LXmHb8r32gda3jgnL6VYimUvhpwzrWgrhs8S6loQp7BB%2FgBR9Hz3UzaIS%2FmhJgA9ynzA7ac2pmaBcFxRS2C0IH3S29GrBkuzp5RS1zxFgRxL5KOcnxt8rC3MshhrOsvfbt3RzVGcuCtaYqfQH6H0PCIPtnDDP4FfmglChUWgKywFC%2BYcSh1bRG8Gfpb%2Bea68WSS6E6MvlkO5kKDhE13XZMw%3D%3D",
      isSold: false,
    },
    {
      id: "CemsCpCIhCCc1RR8KTVk",
      brand: { id: "7lGYUTwVdJm3Dspwy5Ps", title: "pull&bear" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "şort", id: "ay5D4lTDr7ptj3bg3pQc" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 24",
      price: 167.92,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      isSold: false,
    },
    {
      id: "DfLSFzPcYzWS0Ho3ksCB",
      brand: { title: "mavi", id: "SPAp6xFJoTvQWDOdJIOp" },
      color: { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "mont", id: "F2M107NYaLXAkpc6tNxp" },
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 285.93,
      title: "Test Ürünü 5",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
    },
    {
      id: "EehwciU5TSEKN6rSaoxb",
      brand: { id: "7lGYUTwVdJm3Dspwy5Ps", title: "pull&bear" },
      color: { title: "yeşil", id: "k6eFVpYLsQtMH0nGg8U7" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "gömlek", id: "EAxL5ERqwiGzcnWQUpb5" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isSold: false,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image7.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=HmhJL3ogAdn5xrEug2TDTwKtqAssqjk%2B40tKsBgCo%2BWFaMZFbtYVM0l9V32gI%2BpmYM2SafxHJ%2BYCPjtAbmsK%2Bv%2BkV1fMIgVMmHVW4Wf0miTFm2w4xouUDkrmUp1TAflJ4n5zf0SQ5wds9PheHLgeIDaRjpReNGnnONy2nb2hrT32iWMWi2haEVc%2FAQDAw6KkrRSPS%2B%2FN6OENObb8umQ%2F7YO7sv3ya7BVBQFmCy9%2FQ%2BixGkIXSlbXVrZ%2Fl1BBI%2FSrpNLUl9gW78y%2F6ix3%2FU1nZhU5M8gWj9FepdLbbyOFX0bMAaKiEdgZADOCYr%2Ff1lRv%2BqyTQFPKHCcXLOrQEzxFaw%3D%3D",
      title: "Test Ürünü 11",
      price: 589.1,
    },
    {
      id: "ExfxOcEbBpSQZMPxAA64",
      brand: { title: "mavi", id: "SPAp6xFJoTvQWDOdJIOp" },
      color: { id: "c4nOCfWbyBlk8wPf0QLb", title: "pembe" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "polar", id: "Uw7aGIK51TFvKTCK344J" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      isSold: false,
      price: 231.85,
      title: "Test Ürünü 23",
    },
    {
      id: "JAj7wwGBzUdmbDzq3h6J",
      brand: { id: "7lGYUTwVdJm3Dspwy5Ps", title: "pull&bear" },
      color: { id: "nlqf5fBkM6iJiqwwjVWp", title: "sarı" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "kazak", id: "rM65sYM4QAmLhAyJUpIY" },
      price: 964.42,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D",
      isSold: false,
      title: "Test Ürünü 9",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "JWFX2zf72dw1qlBVpKmz",
      brand: { title: "mavi", id: "SPAp6xFJoTvQWDOdJIOp" },
      color: { id: "c4nOCfWbyBlk8wPf0QLb", title: "pembe" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "gömlek", id: "EAxL5ERqwiGzcnWQUpb5" },
      price: 773.79,
      title: "Test Ürünü 3",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image7.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=HmhJL3ogAdn5xrEug2TDTwKtqAssqjk%2B40tKsBgCo%2BWFaMZFbtYVM0l9V32gI%2BpmYM2SafxHJ%2BYCPjtAbmsK%2Bv%2BkV1fMIgVMmHVW4Wf0miTFm2w4xouUDkrmUp1TAflJ4n5zf0SQ5wds9PheHLgeIDaRjpReNGnnONy2nb2hrT32iWMWi2haEVc%2FAQDAw6KkrRSPS%2B%2FN6OENObb8umQ%2F7YO7sv3ya7BVBQFmCy9%2FQ%2BixGkIXSlbXVrZ%2Fl1BBI%2FSrpNLUl9gW78y%2F6ix3%2FU1nZhU5M8gWj9FepdLbbyOFX0bMAaKiEdgZADOCYr%2Ff1lRv%2BqyTQFPKHCcXLOrQEzxFaw%3D%3D",
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "Kes1XApeWQVV9kSSrL1Y",
      brand: { id: "7lGYUTwVdJm3Dspwy5Ps", title: "pull&bear" },
      color: { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "gömlek", id: "EAxL5ERqwiGzcnWQUpb5" },
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image5.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=WMgXsBCNAZesTfkqPgDDumDoYC5C7lr%2BHroPa%2BJ8oypDP9Svldq7GGVxP2IKtqpbytveAhZ0iO6RD27MyJjTjWB7rH8Q9tFiyQEW4Ay9z7YEiuat5NoBCun7IEoPNQ9gWugEl%2BK82wsIx7ae8lcCZZfZRyTCZOJf7A6UMqJ%2BnzTYmHgdGhywIeR6azQn4Jbqc7Zkneyjyg7RxFmyv8h%2FvWX9NL14r%2FvD9ctduN8EqDyr7f0AesR%2FfjS3EVHY3gYdVkrtJ%2FHhZTOil%2Bl6o5WEszlu5eJHTg5bl5KaQDU%2BFcbHjsqF5xlMf5jtlZ3OEpsDPHak5XnCjb4LQFBenheEKQ%3D%3D",
      price: 590.59,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 7",
      isSold: false,
    },
    {
      id: "KsU9vfgMtUdbr5WV6IID",
      brand: { id: "UecyKuxjf9zeA1sf1PD7", title: "lacoste" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "mont", id: "F2M107NYaLXAkpc6tNxp" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 4",
      isSold: false,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image3.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=kCKVXkwqgXxwCtrkRQTMnjyiLccvhxVOOg%2B8U%2BLqNBwXkQbzDYNnc7S%2BNv8qo3DI6axr%2B4Bp56sjYrRnlk1LQpyTlSrZ8d0YmIPu4EKqA6l%2Bq6UDxHMVUucHZfU1IFFA7I6229yzgncdNs39YcBM5GL3KeDdm5DhLtP5Wv4dwl%2Bof%2FEUgWYk725r0619AkcV2OVZWYAlWjbxljwvaTATme8%2BuzhhGWC%2B5nYLkvwbiPw%2FvmkPDJntq0nq825h5bKKVms95kXWvvib81%2FW2lFAMoCjcv%2Ftro3RBGNeMXbPyY92tjQ0ymr8hN9ppYnRqI%2BsgyXYtFYE%2FlRpor37PccyIQ%3D%3D",
      price: 94.31,
    },
    {
      id: "LeEUIiyLQbaIessFeyQr",
      brand: { id: "J5btZCzv6vCTMkFGYgiY", title: "nike" },
      color: { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "ayakkabı", id: "vHdbZttbtnFsab3GjstF" },
      price: 747.1,
      isSold: false,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 21",
    },
    {
      id: "OEcU5WekVaS5WhTiHD3D",
      brand: { title: "mavi", id: "SPAp6xFJoTvQWDOdJIOp" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "gömlek", id: "EAxL5ERqwiGzcnWQUpb5" },
      title: "Test Ürünü 25",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
      isSold: false,
      price: 189.22,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "PctEec32zlAodZ9bXaX7",
      brand: { id: "J5btZCzv6vCTMkFGYgiY", title: "nike" },
      color: { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "şort", id: "ay5D4lTDr7ptj3bg3pQc" },
      isSold: false,
      title: "Test Ürünü 2",
      price: 872.18,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image3.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=kCKVXkwqgXxwCtrkRQTMnjyiLccvhxVOOg%2B8U%2BLqNBwXkQbzDYNnc7S%2BNv8qo3DI6axr%2B4Bp56sjYrRnlk1LQpyTlSrZ8d0YmIPu4EKqA6l%2Bq6UDxHMVUucHZfU1IFFA7I6229yzgncdNs39YcBM5GL3KeDdm5DhLtP5Wv4dwl%2Bof%2FEUgWYk725r0619AkcV2OVZWYAlWjbxljwvaTATme8%2BuzhhGWC%2B5nYLkvwbiPw%2FvmkPDJntq0nq825h5bKKVms95kXWvvib81%2FW2lFAMoCjcv%2Ftro3RBGNeMXbPyY92tjQ0ymr8hN9ppYnRqI%2BsgyXYtFYE%2FlRpor37PccyIQ%3D%3D",
    },
    {
      id: "QEVRFdqoQNzCh7XjsSJe",
      brand: { id: "UecyKuxjf9zeA1sf1PD7", title: "lacoste" },
      color: { id: "c4nOCfWbyBlk8wPf0QLb", title: "pembe" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "ayakkabı", id: "vHdbZttbtnFsab3GjstF" },
      price: 816.4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isSold: false,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image7.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=HmhJL3ogAdn5xrEug2TDTwKtqAssqjk%2B40tKsBgCo%2BWFaMZFbtYVM0l9V32gI%2BpmYM2SafxHJ%2BYCPjtAbmsK%2Bv%2BkV1fMIgVMmHVW4Wf0miTFm2w4xouUDkrmUp1TAflJ4n5zf0SQ5wds9PheHLgeIDaRjpReNGnnONy2nb2hrT32iWMWi2haEVc%2FAQDAw6KkrRSPS%2B%2FN6OENObb8umQ%2F7YO7sv3ya7BVBQFmCy9%2FQ%2BixGkIXSlbXVrZ%2Fl1BBI%2FSrpNLUl9gW78y%2F6ix3%2FU1nZhU5M8gWj9FepdLbbyOFX0bMAaKiEdgZADOCYr%2Ff1lRv%2BqyTQFPKHCcXLOrQEzxFaw%3D%3D",
      title: "Test Ürünü 18",
    },
    {
      id: "RSTqHs3SWQHDmV9vwveD",
      brand: { id: "7lGYUTwVdJm3Dspwy5Ps", title: "pull&bear" },
      color: { id: "zADt9mqybY0BfVqRlY0Y", title: "mavi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "polar", id: "Uw7aGIK51TFvKTCK344J" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
      price: 672.82,
      title: "Test Ürünü 20",
      isSold: false,
    },
    {
      id: "TNQ5qUGaBw9GKSMbCPQd",
      brand: { title: "vakko", id: "ikLoH8kxHpyA7D6PZM0l" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "gömlek", id: "EAxL5ERqwiGzcnWQUpb5" },
      price: 748.28,
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 28",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image3.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=kCKVXkwqgXxwCtrkRQTMnjyiLccvhxVOOg%2B8U%2BLqNBwXkQbzDYNnc7S%2BNv8qo3DI6axr%2B4Bp56sjYrRnlk1LQpyTlSrZ8d0YmIPu4EKqA6l%2Bq6UDxHMVUucHZfU1IFFA7I6229yzgncdNs39YcBM5GL3KeDdm5DhLtP5Wv4dwl%2Bof%2FEUgWYk725r0619AkcV2OVZWYAlWjbxljwvaTATme8%2BuzhhGWC%2B5nYLkvwbiPw%2FvmkPDJntq0nq825h5bKKVms95kXWvvib81%2FW2lFAMoCjcv%2Ftro3RBGNeMXbPyY92tjQ0ymr8hN9ppYnRqI%2BsgyXYtFYE%2FlRpor37PccyIQ%3D%3D",
    },
    {
      id: "UABDAsdN4v2IxQUfbNNo",
      brand: { title: "vakko", id: "ikLoH8kxHpyA7D6PZM0l" },
      color: { id: "zADt9mqybY0BfVqRlY0Y", title: "mavi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "tişört", id: "USR80XNgmcVJrVWlU92G" },
      isSold: false,
      title: "Test Ürünü 15",
      price: 65.82,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "VnNQ0CPRhQN2mBLHYC31",
      brand: { id: "hoYzGqV0muhBQdltaadO", title: "levis" },
      color: { title: "beyaz", id: "C9HSCUyvqrVTXxl9yLTT" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "ayakkabı", id: "vHdbZttbtnFsab3GjstF" },
      price: 584.96,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isSold: false,
      title: "Test Ürünü 1",
    },
    {
      id: "WoReCdAkCY9346Q4x4rw",
      brand: { id: "UecyKuxjf9zeA1sf1PD7", title: "lacoste" },
      color: { id: "zADt9mqybY0BfVqRlY0Y", title: "mavi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "mont", id: "F2M107NYaLXAkpc6tNxp" },
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image3.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=kCKVXkwqgXxwCtrkRQTMnjyiLccvhxVOOg%2B8U%2BLqNBwXkQbzDYNnc7S%2BNv8qo3DI6axr%2B4Bp56sjYrRnlk1LQpyTlSrZ8d0YmIPu4EKqA6l%2Bq6UDxHMVUucHZfU1IFFA7I6229yzgncdNs39YcBM5GL3KeDdm5DhLtP5Wv4dwl%2Bof%2FEUgWYk725r0619AkcV2OVZWYAlWjbxljwvaTATme8%2BuzhhGWC%2B5nYLkvwbiPw%2FvmkPDJntq0nq825h5bKKVms95kXWvvib81%2FW2lFAMoCjcv%2Ftro3RBGNeMXbPyY92tjQ0ymr8hN9ppYnRqI%2BsgyXYtFYE%2FlRpor37PccyIQ%3D%3D",
      isSold: false,
      title: "Test Ürünü 22",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 276.48,
    },
    {
      id: "WyEO8z8zmfMwa8PcZA19",
      brand: { id: "hoYzGqV0muhBQdltaadO", title: "levis" },
      color: { id: "ENy5bwEOIJtugbnFbwjE", title: "siyah" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "ayakkabı", id: "vHdbZttbtnFsab3GjstF" },
      price: 248.66,
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D",
      title: "Test Ürünü 27",
    },
    {
      id: "dEvdG61rYW2BKxFFFAaj",
      brand: { id: "J5btZCzv6vCTMkFGYgiY", title: "nike" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "yeni", id: "8DBGbroOE2lNpIUIy9CZ" },
      category: { title: "şort", id: "ay5D4lTDr7ptj3bg3pQc" },
      isSold: false,
      price: 177.71,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image2.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=UsbmQHBuM2iilvDIwZORchIbUflBZ8v24DAQYWwfROj1dkyxubMC6JUdmhdP%2Bu0V4W8JXxbDCfGQe0Hcl2VAp0GWyJ0iViYiISWMO01lKBhUo3DhQ8wee1%2BUnp0XJG2LXmHb8r32gda3jgnL6VYimUvhpwzrWgrhs8S6loQp7BB%2FgBR9Hz3UzaIS%2FmhJgA9ynzA7ac2pmaBcFxRS2C0IH3S29GrBkuzp5RS1zxFgRxL5KOcnxt8rC3MshhrOsvfbt3RzVGcuCtaYqfQH6H0PCIPtnDDP4FfmglChUWgKywFC%2BYcSh1bRG8Gfpb%2Bea68WSS6E6MvlkO5kKDhE13XZMw%3D%3D",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 13",
    },
    {
      id: "fiLvzkFaRir0LROP6xE8",
      brand: { id: "J5btZCzv6vCTMkFGYgiY", title: "nike" },
      color: { title: "beyaz", id: "C9HSCUyvqrVTXxl9yLTT" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "kazak", id: "rM65sYM4QAmLhAyJUpIY" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      title: "Test Ürünü 29",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image3.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=kCKVXkwqgXxwCtrkRQTMnjyiLccvhxVOOg%2B8U%2BLqNBwXkQbzDYNnc7S%2BNv8qo3DI6axr%2B4Bp56sjYrRnlk1LQpyTlSrZ8d0YmIPu4EKqA6l%2Bq6UDxHMVUucHZfU1IFFA7I6229yzgncdNs39YcBM5GL3KeDdm5DhLtP5Wv4dwl%2Bof%2FEUgWYk725r0619AkcV2OVZWYAlWjbxljwvaTATme8%2BuzhhGWC%2B5nYLkvwbiPw%2FvmkPDJntq0nq825h5bKKVms95kXWvvib81%2FW2lFAMoCjcv%2Ftro3RBGNeMXbPyY92tjQ0ymr8hN9ppYnRqI%2BsgyXYtFYE%2FlRpor37PccyIQ%3D%3D",
      price: 741.19,
      isSold: false,
    },
    {
      id: "gBfUaPLOqCwiiEjiuwgk",
      brand: { id: "hoYzGqV0muhBQdltaadO", title: "levis" },
      color: { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "kazak", id: "rM65sYM4QAmLhAyJUpIY" },
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image2.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=UsbmQHBuM2iilvDIwZORchIbUflBZ8v24DAQYWwfROj1dkyxubMC6JUdmhdP%2Bu0V4W8JXxbDCfGQe0Hcl2VAp0GWyJ0iViYiISWMO01lKBhUo3DhQ8wee1%2BUnp0XJG2LXmHb8r32gda3jgnL6VYimUvhpwzrWgrhs8S6loQp7BB%2FgBR9Hz3UzaIS%2FmhJgA9ynzA7ac2pmaBcFxRS2C0IH3S29GrBkuzp5RS1zxFgRxL5KOcnxt8rC3MshhrOsvfbt3RzVGcuCtaYqfQH6H0PCIPtnDDP4FfmglChUWgKywFC%2BYcSh1bRG8Gfpb%2Bea68WSS6E6MvlkO5kKDhE13XZMw%3D%3D",
      title: "Test Ürünü 6",
      isSold: false,
      price: 992.57,
    },
    {
      id: "jU0pDdjV4Kx84Dzon5Dd",
      brand: { id: "J5btZCzv6vCTMkFGYgiY", title: "nike" },
      color: { id: "h1BgCxUOzFdYzQFJp0tC", title: "lacivert" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { id: "ACUAtq75C1pknwgFYrBq", title: "yeni gibi" },
      category: { title: "tişört", id: "USR80XNgmcVJrVWlU92G" },
      title: "Test Ürünü 14",
      price: 570.26,
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D",
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "o1vK3whadA1MU1q0iFM6",
      brand: { id: "hoYzGqV0muhBQdltaadO", title: "levis" },
      color: { id: "Y2HjiCtk04eaGVSf3cWH", title: "kahverengi" },
      owner: "Vb6Ep6FPPVVasWQ7XuHf",
      status: { title: "eski", id: "pejnzB7dQnqf9Z9xyfE0" },
      category: { title: "kazak", id: "rM65sYM4QAmLhAyJUpIY" },
      price: 685.87,
      title: "Test Ürünü 16",
      imageUrl:
        "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
      isSold: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ]);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
          />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/product/">
          <ProductDetail
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
          />
        </Route>
        <Route path="/addproduct">
          <AddProduct
            getID={getID}
            setID={setID}
            getProductList={getProductList}
            setProductList={setProductList}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
