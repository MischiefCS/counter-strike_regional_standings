### Roster Details<br />
Team Name: MCS Gaming<br />
Roster: Goodbye, Oczarka, ogura, Scorchyy, snufaffu<br />
Global Rank: [159](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  533.6<br />
<br />
Final Rank Value (533.6) = Starting Rank Value (549.2) + Head To Head Adjustments (-15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 549.2
- 400 + ( ( 0.068 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 549.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      354 | 2025-02-10 | Marsborne            | L   | 0.639      | -            | -                | -                | -         |   -10.21 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            4 |      394 | 2025-02-09 | Bad News Capybaras   | W   | 0.632      | 0.143        | 0.000 (0.000)    | 0.076 (0.007)    | 0 (0.000) |     9.34 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            3 |      435 | 2025-02-08 | Marsborne            | L   | 0.626      | -            | -                | -                | -         |   -10.67 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            2 |     1032 | 2024-12-05 | Bad Boys             | L   | 0.194      | -            | -                | -                | -         |    -2.12 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            1 |     1103 | 2024-12-02 | Chicken Coop Esports | L   | 0.174      | -            | -                | -                | -         |    -1.90 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($267.53)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.214 | $1,250.00      | $267.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
