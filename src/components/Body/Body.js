import React, { Component } from "react";
import spiderImage from "./images/spider1.webp";
import spider1 from "./images/spider1.webp";
import spider2 from "./images/spider2.webp";
import spider3 from "./images/spider3.webp";
import Square from "../Square/Square";
import "./Body.css";
export class Body extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <p>
            <img src={spiderImage} alt="spider" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            dignissimos debitis sequi voluptatum, rem incidunt numquam corporis
            ipsa quia officiis, aliquam consequatur reprehenderit placeat
            laudantium magni natus, fugiat repellendus dolorum. Vitae explicabo
            autem libero quos architecto vel rem consectetur mollitia expedita
            quibusdam debitis tempore natus atque recusandae in facilis earum
            dolore quisquam officia, maiores fugiat. Sapiente, voluptatem neque.
            Consequatur, sit?
          </p>
          <div style={{ display: "flex" }}>
            <Square name="spider-1" spider={spider1} />
            <Square name="spider-2" spider={spider2} />
            <Square name="spider-3" spider={spider3} />
          </div>
        </div>
      </div>
    );
  }
}
export default Body;