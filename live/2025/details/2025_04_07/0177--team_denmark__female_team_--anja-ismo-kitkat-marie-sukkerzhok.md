### Roster Details<br />
Team Name: Team Denmark (Female team)<br />
Roster: anja, Ismo, KiTKaT, marie, Sukkerzhok<br />
Global Rank: [177](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  593.7<br />
<br />
Final Rank Value (593.7) = Starting Rank Value (593.5) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 593.5
- 400 + ( ( 0.094 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 593.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1523 | 2024-11-13 | Prototype Blaze           | L   | 0.229      | -            | -                | -                | -         |    -1.68 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            4 |     1538 | 2024-11-12 | Team Canada (Female team) | W   | 0.224      | 0.557        | 0.000 (0.000)    | 0.018 (0.002)    | 1 (0.224) |     1.94 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            3 |     1568 | 2024-11-11 | Team Poland (Female team) | L   | 0.218      | -            | -                | -                | -         |    -1.27 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            2 |     1573 | 2024-11-11 | Team Iran (Female team)   | W   | 0.217      | 0.557        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.217) |     1.73 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            1 |     1882 | 2024-10-18 | Eco Warriors              | L   | 0.058      | -            | -                | -                | -         |    -0.52 | Ismo, KiTKaT, marie, Nea, pullox      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,276.13)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.238 | $5,000.00      | $1,190.63       |
| 2024-10-20 |      0.071 | $1,200.00      | $85.50          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
