### Roster Details<br />
Team Name: Nouns Esports<br />
Roster: cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH<br />
Global Rank: [153](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  644.7<br />
<br />
Final Rank Value (644.7) = Starting Rank Value (650.5) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.5
- 400 + ( ( 0.121 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 650.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1529 | 2024-11-12 | KRÜ Esports      | L   | 0.228      | -            | -                | -                | -         |    -3.81 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            7 |     1550 | 2024-11-12 | BESTIA           | L   | 0.223      | -            | -                | -                | -         |    -2.00 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            6 |     1562 | 2024-11-11 | PaiN Gaming      | L   | 0.222      | -            | -                | -                | -         |    -0.03 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            5 |     1898 | 2024-10-17 | Party Astronauts | L   | 0.053      | -            | -                | -                | -         |    -0.77 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            4 |     1922 | 2024-10-16 | Legacy           | L   | 0.047      | -            | -                | -                | -         |    -0.45 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            3 |     1949 | 2024-10-15 | Wildcard         | W   | 0.040      | 0.477        | 0.189 (0.004)    | 0.425 (0.008)    | 0 (0.000) |     1.22 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            2 |     2012 | 2024-10-09 | Mythic           | W   | 0.000      | 0.477        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.00 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |
|            1 |     2019 | 2024-10-09 | Mythic           | W   | 0.000      | 0.477        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.00 | cJ-dA-K1nG, Jeorge, junior, nosraC, RUSH |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($309.31)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $4,250.00      | $309.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
