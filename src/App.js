import React from "react";
import { Routes, Route } from "react-router-dom";

import { FullLayout, PortfolioLayout } from "./Components/OutletWrapper/OutletWrapper.components";

import HomePage from "./Pages/HomePage/Home.pages";
import Portfolio from "./Pages/PortfolioPage/Portfolio.pages";
import Contact from "./Pages/ContactPage/Contact.pages";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.pages";
import TopicPage from "./Pages/TopicPage/Topic.pages";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.components";
import NotFound from "./Pages/NotFoundPage/NotFound.pages";

import { category } from "./data/carouselData";
import { topicData } from "./data/topicData";

import "./App.scss";

function App() {

	return (
		<div className="App">
			<ScrollToTop>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/*" element={<FullLayout />}>
						<Route index element={<HomePage />} />
						<Route path="contact" element={<Contact />} />
					</Route>
					<Route path="/portfolio" element={<PortfolioLayout />}>
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/portfolio" element={<FullLayout />}>
							<Route path=":categoryUrl" element={<CategoryPage category={category} />} />
							<Route path=":categoryUrl/:title" element={<TopicPage topicData={topicData} />} />
						</Route>
					</Route>
				</Routes>
			</ScrollToTop>
		</div>
	);
}

export default App;
