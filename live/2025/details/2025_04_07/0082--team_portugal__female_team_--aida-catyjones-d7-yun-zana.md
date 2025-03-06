### Roster Details<br />
Team Name: Team Portugal (Female team)<br />
Roster: Aida, CatyJones, D7, yuN, Zana<br />
Global Rank: [82](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  782.1<br />
<br />
Final Rank Value (782.1) = Starting Rank Value (779.0) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 779.0
- 400 + ( ( 0.183 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 779.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1487 | 2024-11-14 | Team USA (Female team)       | W   | 0.237      | 0.557        | 0.011 (0.001)    | 0.018 (0.002)    | 1 (0.237) |     2.06 | Aida, CatyJones, D7, yuN, Zana |
|            4 |     1499 | 2024-11-14 | Prototype Blaze              | L   | 0.236      | -            | -                | -                | -         |    -3.43 | Aida, CatyJones, D7, yuN, Zana |
|            3 |     1524 | 2024-11-13 | Team Australia (Female team) | W   | 0.229      | 0.557        | 0.005 (0.001)    | 0.036 (0.005)    | 1 (0.229) |     1.85 | Aida, CatyJones, D7, yuN, Zana |
|            2 |     1570 | 2024-11-11 | Team USA (Female team)       | W   | 0.217      | 0.557        | 0.011 (0.001)    | 0.018 (0.002)    | 1 (0.217) |     1.90 | Aida, CatyJones, D7, yuN, Zana |
|            1 |     1578 | 2024-11-11 | Team Hong Kong (Female team) | W   | 0.216      | 0.557        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.216) |     0.73 | Aida, CatyJones, D7, yuN, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,762.50)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.238 | $20,000.00     | $4,762.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
