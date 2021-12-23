class TestsContext {
    private state: State;

    constructor(state: State) {
        this.next(state);
    }

    public next(state: State): void {
        this.state = state;
        this.state.setContext(this);
    }

    public test(): void {
        this.state.handle();
    }
}

abstract class State {
    protected context: TestsContext;

    public setContext(context: TestsContext): void {
        this.context = context;
    }

    public abstract handle(): void;
}


class LowPerfomanceTest extends State {

    public handle(): void {
        console.log('Phone charge test on low perfomance');
        console.log('preparing to move to a next test');
        this.context.next(new HighPerfomanceTest());
    }
}

class HighPerfomanceTest extends State {
    public handle(): void {
        console.log('Phone charge test on high perfomance');
        console.log('preparing to move to a next test');
        this.context.next(new DamageTest());
    }
}

class DamageTest extends State {
    public handle(): void {
        console.log('Damage test');
    }
}

const tests = new TestsContext(new LowPerfomanceTest());
tests.test();
tests.test();
tests.test();