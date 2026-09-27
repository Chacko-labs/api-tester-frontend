
 export default function SeoFooter() {
  return (
    <div className="p-4 border-t border-gray-800 text-sm text-gray-400 mt-auto hidden lg:block">
      <h1 className="text-lg font-bold text-white mb-2">API Tester Pro</h1>
      
      <p className="mb-2">
        Welcome to API Tester Pro, a powerful cloud-based API testing tool designed for developers. 
        Whether you are building complex microservices or simple web applications, API Tester Pro 
        provides the robust environment you need to manage endpoints, test REST APIs, and streamline 
        your backend development workflow in our secure enterprise workspace.
      </p>

      <p className="mb-2">
        Modern software development requires efficient and reliable tools for debugging and validating 
        server responses. This platform allows full-stack engineers to instantly send GET, POST, PUT, 
        and DELETE requests without needing to configure complex local desktop client installations. 
        By keeping your workspace entirely in the cloud, you can access your saved requests and header 
        configurations from any machine, ensuring continuous productivity.
      </p>

      <p className="mb-2">
        Our streamlined user interface is built to handle complex JSON payloads, dynamic environment 
        variables, and custom authorization headers. We understand that parsing through heavily nested 
        JSON responses can be tedious, which is why our response viewer automatically formats and color-codes 
        your data for immediate readability. 
      </p>

      <p className="mb-2">
        Security and speed are at the core of our enterprise workspace. When you test REST APIs through 
        our system, you get real-time feedback on network latency, status codes, and response sizes. 
        This makes it incredibly easy to identify bottlenecks in your database queries or pinpoint exactly 
        where a backend controller is failing to authenticate a user.
      </p>

      <p>
        Start optimizing your application architecture today. By integrating this tool into your daily 
        development cycle, you can reduce debugging time, improve your code quality, and ensure that 
        your frontend client applications always receive the exact data structures they expect from your backend servers.
      </p>
    </div>
  );
}
