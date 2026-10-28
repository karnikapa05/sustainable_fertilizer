import React from 'react';

/**
 * Clean Light-Green AgriSense AI ErrorBoundary
 * Catches JavaScript errors in child component tree, displays user-friendly fallback,
 * and logs error details without leaving a white blank screen.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('AgriSense ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4FBF4] p-4 font-sans text-[#1B5E20]">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#C8E6C9] shadow-lg text-center space-y-6 animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mx-auto shadow-xs">
              ⚠️
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
                Something went wrong.
              </h1>
              <p className="text-sm text-[#1B5E20]/80">
                Please refresh the page or try again.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-left text-xs text-red-800 font-mono overflow-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-3 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔄</span>
                <span>Refresh Page</span>
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
