import React from "react";
import { Link, useParams } from "react-router-dom";
import CarouselSlide from "../../Components/CarouselSlide/CarouselSlide.components";

import WebDesign from "../WebDesignPage/WebDesign.pages";

import "./CategoryPage.styles.scss";

const CategoryPage = ({ category }, props) => {
	const { categoryUrl } = useParams();

	if (categoryUrl === "ux-ui") {
		return <WebDesign />;
	}
  else {
		return (
			<>
				<div className="category-page-wrapper">
					{/* {category.filter((item) => item.cat === categoryUrl).map((filteredItem) => (
            <div key={filteredItem.id}>
								<Link
									style={{ fontSize: "40px" }}
									to={`/portfolio/${filteredItem.cat}/${filteredItem.url}`}>
									{filteredItem.title}
                </Link>
							</div>
						))} */}
            <CarouselSlide />
				</div>
			</>
		);
	}
};

export default CategoryPage;

//*CAROUSEL CARD FOR CATEGORIES/