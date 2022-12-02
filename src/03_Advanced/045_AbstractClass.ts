// abstracting git commands
abstract class Command {
  // member method
  abstract commandLine(): string;

  // dummy executing
  execute() {
    console.log("Executing:", this.commandLine());
  }
}

// extends and implements the abstract class
class GitResetCommand extends Command {
  commandLine(): string {
    return "git reset --hard";
  }
}

class GitFetchCommand extends Command {
  commandLine(): string {
    return "git fetch --all";
  }
}

class GitAddCommand extends Command {
  commandLine(): string {
    return "git add .";
  }
}

class GitCommitCommand extends Command {
  commandLine(): string {
    return "git commit -m 'changes updated'";
  }
}

class GitPushCommand extends Command {
  commandLine(): string {
    return "git push";
  }
}

// execute the commands
new GitResetCommand().execute();
new GitFetchCommand().execute();
new GitAddCommand().execute();
new GitCommitCommand().execute();
new GitPushCommand().execute();
