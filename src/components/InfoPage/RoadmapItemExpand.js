export class RoadmapItemExpand extends React.Component {
    className;
    
    static defaultProps = {
        isOpen: false
    };
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        const { isOpen } = this.state;
        return (
        <img
            className={this.className}
            style={{
                opacity: loading ? 0.5 : 1,
                transition: "opacity .25s linear"
            }}
        />
        );
    }
}