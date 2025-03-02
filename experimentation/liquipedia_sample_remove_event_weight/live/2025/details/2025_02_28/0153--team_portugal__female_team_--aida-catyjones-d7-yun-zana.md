### Roster Details<br />
Team Name: Team Portugal (Female team)<br />
Roster: Aida, CatyJones, D7, yuN, Zana<br />
Global Rank: [153](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [111]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  867.0<br />
<br />
Final Rank Value (867.0) = Starting Rank Value (861.0) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 861.0
- 400 + ( ( 0.231 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 861.0


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
|            5 |     3266 | 2024-11-14 | Team USA (Female team)       | W   | 0.492      | 1.000        | 0.017 (0.008)    | 0.024 (0.012)    | 1 (0.492) |     3.47 | Aida, CatyJones, D7, yuN, Zana |
|            4 |     3280 | 2024-11-14 | Prototype Blaze              | L   | 0.490      | -            | -                | -                | -         |    -6.53 | Aida, CatyJones, D7, yuN, Zana |
|            3 |     3319 | 2024-11-13 | Team Australia (Female team) | W   | 0.484      | 1.000        | 0.009 (0.004)    | 0.047 (0.023)    | 1 (0.484) |     4.63 | Aida, CatyJones, D7, yuN, Zana |
|            2 |     3393 | 2024-11-11 | Team USA (Female team)       | W   | 0.472      | 1.000        | 0.017 (0.008)    | 0.024 (0.011)    | 1 (0.472) |     3.37 | Aida, CatyJones, D7, yuN, Zana |
|            1 |     3407 | 2024-11-11 | Team Hong Kong (Female team) | W   | 0.470      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.470) |     1.04 | Aida, CatyJones, D7, yuN, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,853.70)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.493 | $20,000.00     | $9,853.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
