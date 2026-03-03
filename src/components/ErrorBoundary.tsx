import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6">
              Something Went Wrong
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              We apologize for the inconvenience. An unexpected error has occurred.
              Please try refreshing the page or return to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-[#E2725B] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c55b45] transition-colors min-h-[48px]"
              >
                Refresh Page
              </button>
              <a
                href="."
                className="border-2 border-[#004C98] text-[#004C98] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#004C98] hover:text-white transition-colors min-h-[48px]"
              >
                Go Home
              </a>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded text-left">
                <p className="text-sm font-mono text-red-800 mb-2">
                  <strong>Error:</strong> {this.state.error.message}
                </p>
                <pre className="text-xs text-red-700 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
