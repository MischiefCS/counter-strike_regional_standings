### Roster Details<br />
Team Name: Team Poland (Female team)<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Global Rank: [78](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  746.2<br />
<br />
Final Rank Value (746.2) = Starting Rank Value (744.3) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.3
- 400 + ( ( 0.158 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 744.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1479 | 2024-11-14 | Prototype Blaze            | W   | 0.051      | 0.557        | 0.017 (0.000)    | 0.082 (0.002)    | 1 (0.051) |     0.74 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     1498 | 2024-11-14 | Team USA (Female team)     | W   | 0.049      | 0.557        | 0.004 (0.000)    | 0.004 (0.000)    | 1 (0.049) |     0.42 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     1520 | 2024-11-13 | Team Sweden (Female team)  | W   | 0.043      | 0.557        | 0.002 (0.000)    | 0.004 (0.000)    | 1 (0.043) |     0.35 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     1568 | 2024-11-11 | Team Denmark (Female team) | W   | 0.031      | 0.557        | 0.002 (0.000)    | 0.008 (0.000)    | 1 (0.031) |     0.26 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     1574 | 2024-11-11 | Team Canada (Female team)  | W   | 0.030      | 0.557        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.030) |     0.12 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,602.08)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.051 | $70,000.00     | $3,602.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
