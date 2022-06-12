import React from 'react';
import { AppRoutingComponent } from '@app/app-routing.components';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@app/shared/component/error-fallback';

export const AppComponent = () => {
  return (
    <div className="main-wrap">
      <div className="header">Header</div>
      <div className="content">
        <div className="left-wrap">Left menu</div>
        <div className="right-wrap">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRoutingComponent />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};
