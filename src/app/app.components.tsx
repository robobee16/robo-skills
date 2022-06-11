import React from "react";
import {AppRoutingComponent} from "@app/app-routing.components";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "@app/shared/component/error-fallback";

export const AppComponent = () => {
	return <>
		<div className="left-col"></div>
		<div className="right-col">
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<AppRoutingComponent/>
			</ErrorBoundary>
		</div>
	</>
}
