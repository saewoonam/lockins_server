async function main() {
    //import chalk from 'chalk';
    const {chalk} = await import('chalk');
    const error = chalk.bold.red;
    const warning = chalk.hex('#FFA500'); // Orange color

    console.log(error('Error!'));
    console.log(warning('Warning!'));
}
main()
