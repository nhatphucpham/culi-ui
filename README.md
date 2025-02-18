# README.md

# My Lerna Monorepo

This is a monorepo setup using Lerna to manage multiple packages. This project contains two packages: `package-a` and `package-b`.

## Getting Started

To get started with this monorepo, follow these steps:

1. **Install Dependencies**  
   Run the following command to install all dependencies for the packages:
   ```bash
   npm install
   ```

2. **Bootstrap the Packages**  
   Use Lerna to bootstrap the packages and link any cross-dependencies:
   ```bash
   npx lerna bootstrap
   ```

3. **Running the Packages**  
   Each package can be run independently. Navigate to the desired package directory and use the appropriate scripts defined in the package's `package.json`.

## Available Scripts

- **Build**: Build the packages using the defined scripts in each package.
- **Test**: Run tests for each package.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
