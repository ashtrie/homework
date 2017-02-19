import React from 'react';
import ReactDOM from 'react-dom';

const bikes = {
    "downhillBikes": [
        {
            "company": "norco",
            "productLine": {
                "name": "aurum carbon",
                "bikes": [
                    {
                        "name": "c7.1",
                        "frameset": {
                            "frame": "Aurum frame (CARBON / ALLOY )",
                            "fork": "Fox Factory Float 40 w/Kashima",
                            "rearShock": "Fox Factory Float X2 w/Kashima"
                        },
                        "wheels": {
                            "hub": "DT 240",
                            "rims": "DT EX 511 30 mm inner 27.5",
                            "tires": "Magic Mary 27.5x2.35 super gravity"
                        },
                        "components": {
                            "saddle": "Norco Pivotal DH saddle",
                            "brakes": "Sram Guide RSC hydraulic w/200mm rotor",
                            "shifters": "Sram XO 1 DH 1x7"
                        }
                    },
                    {
                        "name": "c7.2",
                        "frameset": {
                            "frame": "Aurum frame (CARBON / ALLOY )",
                            "fork": "Boxxer R2C2 Team 200 mm travel 27.5",
                            "rearShock": "Rockshox Vivid RC2C Coil"
                        },
                        "wheels": {
                            "hub": "DT 350 20 mm",
                            "rims": "DT EX 512 30 mm inner 27.5",
                            "tires": "Magic Mary 27.5x2.35 super gravity"
                        },
                        "components": {
                            "saddle": "Norco Pivotal DH saddle",
                            "brakes": "Sram Guide RS hydraulic w/200 mm rotor",
                            "shifters": "Sram XO 1 DH 1x7"
                        }
                    },
                    {
                        "name": "c7.3",
                        "frameset": {
                            "frame": "Aurum frame (CARBON / ALLOY )",
                            "fork": "Rock shox Boxxer RC 27.5",
                            "rearShock": "Rock shox KAGE RC coil spring"
                        },
                        "wheels": {
                            "hub": "DT 370 20 mm",
                            "rims": "WTB STP I29",
                            "tires": "Maxxis Minion DHF frnt , DHR II rear 27.5x2.40 Super Tacky"
                        },
                        "components": {
                            "saddle": "SDG I Fly 2.0 I Beam",
                            "brakes": "Sram Guide R hydraulic w/200 mm rotor",
                            "shifters": "Sram GX 1x7"
                        }
                    }
                ]
            }
        },
        {
            "company": "specialized",
            "productLine": {
                "name": "demo 8",
                "bikes": [
                    {
                        "name": "s-works",
                        "frameset": {
                            "frame": "FACT 11m",
                            "fork": "RockShox BoXXer Team 650b",
                            "rearShock": "Custom Öhlins TTX"
                        },
                        "wheels": {
                            "hub": "Custom DT Swiss 350",
                            "rims": "Roval 650b",
                            "tires": "Butcher DH casing 650bx2.5\""
                        },
                        "components": {
                            "saddle": "Phenom Expert",
                            "brakes": "Custom SRAM Guide",
                            "shifters": "XO DH"
                        }
                    },
                    {
                        "name": "carbon",
                        "frameset": {
                            "frame": "FACT 10m",
                            "fork": "RockShox BoXXer RC 650b",
                            "rearShock": "Custom Öhlins TTX"
                        },
                        "wheels": {
                            "hub": "Specialized disc",
                            "rims": "Roval 650b",
                            "tires": "Butcher DH casing 650bx2.5\""
                        },
                        "components": {
                            "saddle": "Body Geometry Phenom Comp",
                            "brakes": "SRAM Guide R",
                            "shifters": "SRAM GX"
                        }
                    },
                    {
                        "name": "alloy",
                        "frameset": {
                            "frame": "M5 alloy",
                            "fork": "RockShox BoXXer Team 650b",
                            "rearShock": "Custom Öhlins TTX"
                        },
                        "wheels": {
                            "hub": "Custom DT Swiss 350",
                            "rims": "Roval 650b",
                            "tires": "Butcher DH casing 650bx2.5\""
                        },
                        "components": {
                            "saddle": "Body Geometry Phenom Comp",
                            "brakes": "SRAM BB30",
                            "shifters": "SRAM X9"
                        }
                    }
                ]
            }
        },
        {
            "company": "giant",
            "productLine": {
                "name": "glory",
                "bikes": [
                    {
                        "name": "advanced 0",
                        "frameset": {
                            "frame": "Advanced-grade composite w/ ALUXX SL rear triangle",
                            "fork": "RockShox Boxxer Team",
                            "rearShock": "RockShox Vivid R2C"
                        },
                        "wheels": {
                            "hub": "DT Swiss 240S",
                            "rims": "DT Swiss EX 471",
                            "tires": "Schwalbe Magic Mary DH"
                        },
                        "components": {
                            "saddle": "Giant Contact SL Forward, SST tubular rails",
                            "brakes": "SRAM Guide Ultimate, hydraulic disc, [F] 200mm [R] 180mm",
                            "shifters": "SRAM Guide Ultimate Composite"
                        }
                    },
                    {
                        "name": "advanced 1",
                        "frameset": {
                            "frame": "Advanced-grade composite w/ ALUXX SL rear triangle",
                            "fork": "Fox 40 Performance Elite",
                            "rearShock": "Fox DHX2 Performance Elite"
                        },
                        "wheels": {
                            "hub": "Giant Performance Tracker Disc",
                            "rims": "Giant P-AM2",
                            "tires": "Schwalbe Magic Mary DH, 27.5x2.35, Vertstar"
                        },
                        "components": {
                            "saddle": "Giant Contact Forward",
                            "brakes": "Shimano Zee, hydraulic disc, [F] 200mm [R] 180mm",
                            "shifters": "Shimano Zee"
                        }
                    },
                    {
                        "name": "glory 2",
                        "frameset": {
                            "frame": "ALUXX SL-grade aluminum, 200mm Maestro suspension",
                            "fork": "RockShox Domain RC Dual Crown",
                            "rearShock": "RockShox Kage R"
                        },
                        "wheels": {
                            "hub": "Giant Performance Tracker Disc, 32h, [F] Boost 110x15mm, [R] 150x12mm",
                            "rims": "Giant P-AM2",
                            "tires": "Schwalbe Magic Mary, 27.5x2.35"
                        },
                        "components": {
                            "saddle": "Giant Contact Forward",
                            "brakes": "SRAM Level TL, hydraulic disc, 200mm",
                            "shifters": "SRAM X5"
                        }
                    }
                ]
            }
        }
    ]
};

let Header = React.createClass({
    render: function() {
        return (
            <header>
                <h1>{ Object.keys(bikes)[0] }</h1>
            </header>
        );
    }
});

let Table = React.createClass({
    render: function() {

        let rows = bikes.downhillBikes.map((item, i) => {
            let bikes = item.productLine.bikes.map((item, j) => {
                return (
                    <div className="bike" key={ j }>
                        <div className="name">Name: { item.name }</div>
                        <div className="frameset">
                            <span>Frameset</span>
                            <ul>
                                <li>{ item.frameset.frame }</li>
                                <li>{ item.frameset.fork }</li>
                                <li>{ item.frameset.rearShock }</li>
                            </ul>
                        </div>
                        <div className="wheels">
                            <span>Wheels</span>
                            <ul>
                                <li>{ item.wheels.hub }</li>
                                <li>{ item.wheels.rims }</li>
                                <li>{ item.wheels.tires }</li>
                            </ul>
                        </div>
                        <div className="components">
                            <span>Components</span>
                            <ul>
                                <li>{ item.components.saddle }</li>
                                <li>{ item.components.brakes }</li>
                                <li>{ item.components.shifters }</li>
                            </ul>
                        </div>
                    </div>
                );
            });

            return (
                <section key={ i }>
                    <h3 className="company">{ item.company }</h3>
                    <h3 className="product-line">{ item.productLine.name }</h3>
                    <div className="bikes">{ bikes }</div>
                </section>
            );
        });

        return (<div>{ rows }</div>);
    }
});

let App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <Table/>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));
