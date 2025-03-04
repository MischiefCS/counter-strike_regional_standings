### Roster Details<br />
Team Name: Lazer Cats<br />
Roster: 7oX1C, Magic, nikitea, Templ, yab0ku-<br />
Global Rank: [226](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [134]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  597.3<br />
<br />
Final Rank Value (597.3) = Starting Rank Value (599.4) + Head To Head Adjustments (-2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.222[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.4
- 400 + ( ( 0.105 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 599.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1161 | 2024-11-30 | Nexus Gaming     | L   | 0.592      | -            | -                | -                | -         |    -1.10 | 7oX1C, Magic, nikitea, Templ, yab0ku- |
|            4 |     1216 | 2024-11-27 | Partizan Esports | L   | 0.573      | -            | -                | -                | -         |    -1.08 | 7oX1C, Magic, nikitea, Templ, yab0ku- |
|            3 |     2492 | 2024-09-26 | Astralis Talent  | L   | 0.159      | -            | -                | -                | -         |    -1.67 | 7oX1C, Magic, nikitea, Templ, yab0ku- |
|            2 |     2841 | 2024-09-15 | Passion UA       | L   | 0.086      | -            | -                | -                | -         |    -0.12 | 7oX1C, Magic, nikitea, Templ, yab0ku- |
|            1 |     2855 | 2024-09-15 | KONO.ECF         | W   | 0.085      | 0.457        | 0.020 (0.001)    | 0.361 (0.014)    | 0 (0.000) |     1.96 | 7oX1C, Magic, nikitea, Templ, yab0ku- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($104.31)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-15 |      0.086 | $1,208.44      | $104.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
