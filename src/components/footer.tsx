export function Footer() {
    return (
        <footer className='flex h-16 gap-4 border-t bg-accent'>
            <div className='flex container items-center px-4 md:px-6'>
                <span className='flex-1 shrink-0 whitespace-nowrap'>
                    &copy; {new Date().getFullYear()} <a href='https://bitbucket.andewil.com/projects/PWP'>Powerimo project</a>
                </span>
            </div>
        </footer>
    );
}