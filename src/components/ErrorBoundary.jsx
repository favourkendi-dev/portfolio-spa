import { Component } from 'react';
import { toast } from 'react-hot-toast';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    console.error('ErrorBoundary caught an error:', error, errorInfo);
    toast.error('Something went wrong. Please refresh the page.');
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
            <p className="mt-4 text-gray-700">
              Something went wrong. We're sorry for the inconvenience.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer font-mono text-sm text-gray-600">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 overflow-auto rounded bg-gray-100 p-3 text-xs">
                  {this.state.error.toString()}
                  {'\n'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <button
              type="button"
              onClick={this.handleReset}
              className="mt-6 rounded bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
            >
              Try Again
            </button>

            <a
              href="/"
              className="mt-4 block text-blue-600 hover:underline"
            >
              Go to Home
            </a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
